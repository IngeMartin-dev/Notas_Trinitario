import { Component, OnInit, inject, ViewChild, ElementRef } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NotificationService, Notification } from '../services/notification.service';

interface ChatContact {
  id: number;
  name: string;
  surname: string;
  profilePicture?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
  notifications: Notification[];
}

interface ChatMessage {
  id: number;
  text: string;
  senderName: string;
  createdAt: string;
  isFromMe: boolean;
}

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chats.html',
  styleUrls: ['./chats.css']
})
export class Chats implements OnInit {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;
  
  private notificationService = inject(NotificationService);

  chats: ChatContact[] = [];
  filteredChats: ChatContact[] = [];
  searchTerm = '';
  isLoading = true;
  
  selectedChat: ChatContact | null = null;
  selectedChatMessages: ChatMessage[] = [];
  newMessage = '';

  ngOnInit() {
    this.loadChats();
  }

  loadChats() {
    this.isLoading = true;
    
    this.notificationService.getNotifications().subscribe({
      next: (notifications) => {
        const contactMap = new Map<number, ChatContact>();

        notifications.forEach(notification => {
          const contactId = notification.user.id;
          const existingContact = contactMap.get(contactId);

          if (!existingContact) {
            contactMap.set(contactId, {
              id: contactId,
              name: notification.user.name,
              surname: notification.user.surname,
              profilePicture: notification.user.profilePicture,
              lastMessage: notification.message,
              lastMessageTime: notification.createdAt,
              unreadCount: notification.isRead ? 0 : 1,
              isOnline: false,
              notifications: [notification]
            });
          } else {
            existingContact.notifications.push(notification);
            if (!notification.isRead) {
              existingContact.unreadCount++;
            }
            // Update last message if this notification is newer
            if (new Date(notification.createdAt) > new Date(existingContact.lastMessageTime)) {
              existingContact.lastMessage = notification.message;
              existingContact.lastMessageTime = notification.createdAt;
            }
          }
        });

        this.chats = Array.from(contactMap.values())
          .sort((a, b) => new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime())
          .map(chat => ({
            ...chat,
            lastMessageTime: this.formatTimeAgo(chat.lastMessageTime)
          }));

        this.filteredChats = [...this.chats];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading chats:', error);
        this.isLoading = false;
      }
    });
  }

  filterChats() {
    if (!this.searchTerm.trim()) {
      this.filteredChats = [...this.chats];
    } else {
      const searchLower = this.searchTerm.toLowerCase();
      this.filteredChats = this.chats.filter(chat => 
        chat.name.toLowerCase().includes(searchLower) ||
        chat.surname.toLowerCase().includes(searchLower) ||
        chat.lastMessage.toLowerCase().includes(searchLower)
      );
    }
  }

  selectChat(chat: ChatContact) {
    this.selectedChat = chat;
    
    // Convert notifications to messages
    this.selectedChatMessages = chat.notifications
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
      .map(notification => ({
        id: notification.id,
        text: notification.message,
        senderName: `${notification.user.name} ${notification.user.surname}`,
        createdAt: notification.createdAt,
        isFromMe: false
      }));

    // Mark notifications as read
    chat.notifications.forEach(notification => {
      if (!notification.isRead) {
        this.notificationService.markAsRead(notification.id).subscribe();
      }
    });
    chat.unreadCount = 0;

    // Scroll to bottom after view updates
    setTimeout(() => this.scrollToBottom(), 100);
  }

  closeChat() {
    this.selectedChat = null;
    this.selectedChatMessages = [];
  }

  sendMessage() {
    if (!this.newMessage.trim() || !this.selectedChat) return;

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    // Add message to the list (local only for now)
    const newMsg: ChatMessage = {
      id: Date.now(),
      text: this.newMessage,
      senderName: `${currentUser.name || 'Yo'} ${currentUser.surname || ''}`,
      createdAt: new Date().toISOString(),
      isFromMe: true
    };

    this.selectedChatMessages.push(newMsg);
    this.newMessage = '';
    
    // Update last message in chat list
    if (this.selectedChat) {
      this.selectedChat.lastMessage = newMsg.text;
      this.selectedChat.lastMessageTime = 'Ahora';
    }

    setTimeout(() => this.scrollToBottom(), 100);
  }

  scrollToBottom() {
    if (this.messagesContainer) {
      const container = this.messagesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }
  }

  formatTimeAgo(createdAt: string): string {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInMinutes = Math.floor((now.getTime() - created.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) return 'Ahora';
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return 'Ayer';
    if (diffInDays < 7) return `${diffInDays}d`;
    
    return created.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'short'
    });
  }

  formatMessageTime(createdAt: string): string {
    const date = new Date(createdAt);
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  }

  getMessageDate(createdAt: string): string {
    const date = new Date(createdAt);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Hoy';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Ayer';
    } else {
      return date.toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'long',
        year: 'numeric'
      });
    }
  }

  getInitials(name: string, surname: string): string {
    return (name.charAt(0) + surname.charAt(0)).toUpperCase();
  }

  getCorrectImageUrl(imagePath: string | null | undefined): string {
    if (!imagePath) return '';
    
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    return `http://localhost:8080${imagePath}`;
  }

  trackByChatId(index: number, chat: ChatContact): number {
    return chat.id;
  }
}
