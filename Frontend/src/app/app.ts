import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, RouterModule } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';
import { MessageService } from './services/message.service';
import { MessagesDropdownComponent } from './messages-dropdown.component';
import { NotificationDetailsComponent, NotificationReply } from './notification-details/notification-details.component';
import { Notification } from './services/notification.service';
import { Message } from './services/message.service';
import { GlobalRealtimeService } from './services/global-realtime.service';
import { GenerationService } from './services/generation.service';
import { GenerationNotifications } from './generation-notifications';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MessagesDropdownComponent, NotificationDetailsComponent, GenerationNotifications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Frontend');
  activeRoute = signal('dashboard');
  isLoading = signal(false);
  sidebarOpen = signal(false);
  sidebarHovered = signal(false);
  currentUser = signal<any>(null);
  currentYear = new Date().getFullYear();
  isLoginRoute = signal(true);
  isDashboardRoute = signal(false);
  sidebarAnimated = signal(false);
  
  // Theme state (claro / oscuro) — delegado al ThemeService
  private themeService = inject(ThemeService);
  isDarkTheme = this.themeService.isDark;

  // Greeting state
  greetingLetters = signal<string[]>([]);
  
  // All communications state
  showMessagesDropdown = signal(false);
  unreadMessageCount = signal(0);
  unreadNotificationCount = signal(0);
  showNotificationDetailsModal = signal(false);
  selectedNotification: Notification | null = null;
  allNotifications: Notification[] = [];
  allMessages: Message[] = [];

  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  private messageService = inject(MessageService);
  private http = inject(HttpClient);
  private router = inject(Router);
  private realtimeService = inject(GlobalRealtimeService);
  private generationService = inject(GenerationService);

  constructor() {
    // El ThemeService aplica el tema guardado automáticamente al iniciar.

    // Start global realtime polling when app initializes
    this.realtimeService.startPolling();
    // Sondea generaciones de boletines activas/recientes en TODA la app
    // (no solo en el apartado de Boletines) para que la notificación tipo
    // "push" se vea sin importar dónde esté el usuario, y sobreviva a un F5.
    this.generationService.startPolling();
    // Check if we're on login route and track current route for menu highlighting
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('Navigation to:', event.url);
      this.isLoginRoute.set(event.url === '/login' || event.url === '/');
      this.isDashboardRoute.set(event.url === '/dashboard');
      
      // Extract route name from URL for menu highlighting
      const routeName = event.url.split('/')[1] || 'dashboard';
      console.log('Setting active route to:', routeName);
      this.activeRoute.set(routeName);
    });

    // Subscribe to auth service user changes to stay in sync
    this.authService.currentUser$.subscribe(user => {
      console.log('App - Auth service user updated:', user);
      this.currentUser.set(user);
      
      // If we have a user and are authenticated, ensure sidebar is visible and load notifications
      if (user && this.authService.isAuthenticated()) {
        console.log('👤 User authenticated, ensuring sidebar is visible...');
        this.sidebarAnimated.set(true);
        
        // Load notifications for the authenticated user
        this.loadNotifications();
        
        // Subscribe to unread count changes
        this.notificationService.getUnreadCount().subscribe(count => {
          this.unreadNotificationCount.set(count);
        });
        
        // Load and subscribe to messages
        this.loadMessages();
        this.messageService.getUnreadCount().subscribe(count => {
          this.unreadMessageCount.set(count);
        });

        // Subscribe to all notifications and messages for dropdown
        this.notificationService.getNotifications().subscribe(notifications => {
          this.allNotifications = notifications;
        });
        
        this.messageService.getMessages().subscribe(messages => {
          this.allMessages = messages;
        });
      }
    });
  }

  generateGreeting() {
    const userName = localStorage.getItem('userName') || 'Usuario';
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour >= 5 && hour < 12) {
      greeting = `Buenos días, ${userName}`;
    } else if (hour >= 12 && hour < 18) {
      greeting = `Buenas tardes, ${userName}`;
    } else {
      greeting = `Buenas noches, ${userName}`;
    }
    
    this.greetingLetters.set(greeting.split(''));
  }

  ngOnInit() {
    // Generate greeting on init
    this.generateGreeting();
    
    // Clear local state first and ensure sidebar stays hidden
    this.currentUser.set(null);
    this.sidebarAnimated.set(false); // Explicitly ensure sidebar starts hidden
    
    if (this.authService.isAuthenticated()) {
      console.log('✅ User is authenticated, loading user data...');
      this.authService.getCurrentUser().subscribe({
        next: (user) => {
          console.log('✅ App - User loaded successfully:', user);
          // The auth service will update the currentUser through the subscription
          // Show sidebar immediately
          console.log('🚀 Triggering sidebar animation...');
          this.sidebarAnimated.set(true);
        },
        error: (err) => {
          console.error('❌ Failed to load user in app:', err);
          // Set user data to null instead of generic defaults
          this.currentUser.set(null);
        }
      });
    } else {
      console.log('❌ User not authenticated in app');
      // Set user data to null if not authenticated
      this.currentUser.set(null);
    }

  }

  startSidebarAnimation() {
    console.log('🚀 Manual sidebar animation triggered...');
    this.sidebarAnimated.set(true);
    console.log('✅ Sidebar animated set to:', this.sidebarAnimated());
  }

  toggleSidebar() {
    this.sidebarOpen.set(!this.sidebarOpen());
  }

  toggleTheme() {
    this.themeService.toggle();
  }



  setActiveRoute(route: string) {
    console.log('Setting active route to:', route);
    this.activeRoute.set(route);
    this.sidebarOpen.set(false);
  }

  testNavigateToSettings() {
    console.log('Testing manual navigation to settings...');
    this.router.navigate(['/settings']).then(success => {
      console.log('Navigation result:', success);
    });
  }

  // Debug method to manually check and show sidebar
  debugSidebar() {
    console.log('🔍 Debugging sidebar state:');
    console.log('- isAuthenticated:', this.authService.isAuthenticated());
    console.log('- currentUser:', this.currentUser());
    console.log('- sidebarAnimated:', this.sidebarAnimated());
    console.log('- isLoginRoute:', this.isLoginRoute());
    
    if (this.authService.isAuthenticated() && this.currentUser()) {
      console.log('✅ Conditions met, forcing sidebar to show...');
      this.sidebarAnimated.set(true);
    } else {
      console.log('❌ Conditions not met for sidebar');
    }
  }

  logout() {
    console.log('Logging out...');
    this.currentUser.set(null);
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  requestNotificationPermission() {
    this.realtimeService.requestPermissionOnUserGesture();
  }
  
  testNotification() {
    this.realtimeService.showTestNotification();
  }

  // Notifications methods
  loadNotifications() {
    const user = this.currentUser();
    if (user && user.id) {
      this.notificationService.loadNotifications(user.id).subscribe({
        error: (err) => console.error('Error loading notifications:', err)
      });
    }
  }

  // Messages methods
  loadMessages() {
    const user = this.currentUser();
    if (user && user.id) {
      this.messageService.loadMessages(user.id).subscribe({
        error: (err) => console.error('Error loading messages:', err)
      });
    }
  }

  toggleMessagesDropdown() {
    this.showMessagesDropdown.set(!this.showMessagesDropdown());
  }

  closeMessagesDropdown() {
    this.showMessagesDropdown.set(false);
  }

  unreadTotalCount(): number {
    return this.unreadMessageCount() + this.unreadNotificationCount();
  }

  // Check if current user can see notifications
  canShowNotifications(): boolean {
    // Show notifications to all authenticated users
    return this.authService.isAuthenticated();
  }

  // Notification Details Methods
  onNotificationClick(event: any) {
    console.log('=== NOTIFICATION CLICKED ===', event);
    this.selectedNotification = event.notification;
    this.showNotificationDetailsModal.set(true);
    this.closeMessagesDropdown();
    
    // Mark as read when opening
    if (!event.notification.isRead) {
      this.notificationService.markAsRead(event.notification.id).subscribe();
    }
  }

  // Message Click Handler
  onMessageClick(event: any) {
    console.log('=== MESSAGE/NOTIFICATION CLICKED ===', event);
    
    if (event.type === 'message') {
      // Handle message click
      this.showSuccessMessage(`Mensaje de ${event.item.senderName} ${event.item.senderSurname}`);
    } else if (event.type === 'notification') {
      // Handle notification click - open notification details modal
      this.selectedNotification = event.item;
      this.showNotificationDetailsModal.set(true);
      
      // Mark as read when opening
      if (!event.item.isRead) {
        this.notificationService.markAsRead(event.item.id).subscribe();
      }
    }
  }

  closeNotificationDetailsModal() {
    console.log('=== CLOSING NOTIFICATION DETAILS MODAL ===');
    this.showNotificationDetailsModal.set(false);
    this.selectedNotification = null;
  }

  handleNotificationReply(replyData: NotificationReply) {
    console.log('=== HANDLING NOTIFICATION REPLY ===', replyData);
    
    // Debug the replyData structure
    console.log('replyData.originalNotificationId:', replyData.originalNotificationId);
    console.log('replyData.message:', replyData.message);
    console.log('replyData.senderId:', replyData.senderId);
    
    const replyNotification = {
      originalNotificationId: replyData.originalNotificationId,
      replyMessage: replyData.message,
      senderId: replyData.senderId
    };

    console.log('Sending reply notification:', replyNotification);

    this.http.post('http://localhost:8080/api/notifications/reply', replyNotification).subscribe({
      next: (response) => {
        console.log('✅ Reply sent successfully:', response);
        this.showSuccessMessage('¡Respuesta enviada exitosamente!');
        this.closeNotificationDetailsModal();
        // Refresh notifications
        this.refreshNotifications();
      },
      error: (error) => {
        console.error('❌ Failed to send reply:', error);
        console.error('Error details:', error.error);
        this.showErrorMessage('Error al enviar la respuesta');
      }
    });
  }

  refreshNotifications() {
    const user = this.currentUser();
    if (user && user.id) {
      this.notificationService.loadNotifications(user.id).subscribe({
        error: (err) => console.error('Error refreshing notifications:', err)
      });
      this.messageService.loadMessages(user.id).subscribe({
        error: (err) => console.error('Error refreshing messages:', err)
      });
    }
  }

  private showSuccessMessage(message: string) {
    // Create success notification
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #10b981;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
      animation: slideInRight 0.3s ease-out;
    `;
    
    successDiv.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 18px;">✅</span>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
      successDiv.remove();
    }, 3000);
  }

  private showErrorMessage(message: string) {
    // Create error notification
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ef4444;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
      animation: slideInRight 0.3s ease-out;
    `;
    
    errorDiv.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 18px;">❌</span>
        <span>${message}</span>
      </div>
    `;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
      errorDiv.remove();
    }, 3000);
  }

  // Lifecycle hooks
  ngOnDestroy() {
    this.realtimeService.stopPolling();
    this.generationService.stopPolling();
  }



  getUserInitials(): string {
    const user = this.currentUser();
    if (user && user.name && user.surname) {
      return (user.name.charAt(0) + user.surname.charAt(0)).toUpperCase();
    } else if (user && user.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return 'U';
  }

  getDisplayName(): string {
    const user = this.currentUser();
    if (user) {
      // Return the actual user data instead of generic fallbacks
      if (user.name && user.surname) {
        return `${user.name} ${user.surname}`;
      }
      return user.name || user.username || 'Usuario sin nombre';
    }
    return 'Usuario sin autenticar';
  }

  getDisplayUsername(): string {
    const user = this.currentUser();
    if (user && user.username) {
      return user.username;
    }
    return '';
  }

  getDisplayRole(): string {
    const user = this.currentUser();
    if (user && user.role && user.role.name) {
      return this.translateRole(user.role.name);
    }
    return '';
  }

  private translateRole(roleName: string): string {
    const roleTranslations: { [key: string]: string } = {
      'ADMIN': 'Administrador',
      'TEACHER': 'Profesor',
      'PARENT': 'Padre de Familia',
      'STUDENT': 'Estudiante',
    };
    
    return roleTranslations[roleName] || roleName;
  }

  // Helper method to ensure profile picture URLs are correct
  getCorrectImageUrl(imagePath: string | null): string | null {
    if (!imagePath) return null;
    
    if (imagePath.startsWith('http')) {
      return imagePath; // Already a full URL
    }
    
    // Construct full URL for relative paths using backend port 8080
    return `http://localhost:8080${imagePath}`;
  }
}