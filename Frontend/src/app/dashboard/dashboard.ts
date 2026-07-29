import { Component, OnInit, signal, inject, effect } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';
import { GradesUpdateService } from '../services/grades-update.service';

interface Activity {
  icon: string;
  description: string;
  timestamp: number; // Unix timestamp in ms
}

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  // Start with zeros for instant loading
  totalStudents = 0;
  totalGrades = 0;
  totalSubjects = 0;
  totalReports = 0;
  
  // Track individual data loading states
  studentsLoaded = false;
  reportCardsLoaded = false;
  
  currentUser = signal<any>(null);
  private authService = inject(AuthService);
  private http = inject(HttpClient);
  private notificationService = inject(NotificationService);
  private gradesUpdateService = inject(GradesUpdateService);

  // Modal states
  showAddStudentModal = false;
  showAddGradeModal = false;
  showAddSubjectModal = false;
  showViewReportsModal = false;
  showSendNotificationModal = false;

  // Add Student Form Data
  newStudent = {
    name: '',
    surname: '',
    documentNumber: '',
    grade: '',
    classGroup: ''
  };

  // Add Grade Form Data
  newGrade = {
    name: '',
    description: ''
  };

  // Add Subject Form Data
  newSubject = {
    name: '',
    code: '',
    grade: '',
    hoursPerWeek: 1,
    credits: 1,
    type: 'core' as 'core' | 'elective'
  };

  isSavingStudent = false;
  isSavingGrade = false;
  isSavingSubject = false;
  isSendingNotification = false;

  // Notification System Variables
  showNotification = false;
  notificationType: 'success' | 'error' | null = null;
  notificationMessage = '';

  // Countdown Timer Variables
  showCountdownTimer = false;
  countdownName = '';
  countdownTargetDate = '';
  countdownDaysInput = 0;
  countdownEndDate = '';
  countdownDays = '00';
  countdownHours = '00';
  countdownMinutes = '00';
  countdownSeconds = '00';
  showCountdownConfigModal = false;
  countdownInterval: any;
  isAdminUser = false;
  isTeacherUser = false;
  teacherSubjects: string[] = [];
  homeroomAssignment: any | null = null;
  notification12HoursSent = false;
  notificationFinishedSent = false;

  // Countdown Timer Methods
  loadCountdownConfig() {
    const savedConfig = localStorage.getItem('countdownConfig');
    if (savedConfig) {
      const config = JSON.parse(savedConfig);
      this.countdownName = config.name || '';
      this.countdownTargetDate = config.targetDate || '';
      
      // Load notification flags
      this.notification12HoursSent = localStorage.getItem('countdownNotification12h') === 'true';
      this.notificationFinishedSent = localStorage.getItem('countdownNotificationFinished') === 'true';
      
      if (this.countdownName && this.countdownTargetDate) {
        this.showCountdownTimer = true;
        // Format end date for display
        const endDate = new Date(this.countdownTargetDate);
        this.countdownEndDate = endDate.toLocaleDateString('es-CO', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        this.startCountdown();
      }
    }
  }

  openCountdownConfig() {
    this.showCountdownConfigModal = true;
  }

  closeCountdownConfig() {
    this.showCountdownConfigModal = false;
  }

  saveCountdownConfig() {
    if (!this.countdownName) {
      this.showErrorNotification('Por favor ingrese un título');
      return;
    }
    
    let targetDate: Date;
    
    // Use date if provided, otherwise use days
    if (this.countdownTargetDate) {
      targetDate = new Date(this.countdownTargetDate);
    } else if (this.countdownDaysInput && this.countdownDaysInput > 0) {
      targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + this.countdownDaysInput);
    } else {
      this.showErrorNotification('Por favor ingrese una fecha o días');
      return;
    }
    
    // Reset notification flags for new countdown
    this.notification12HoursSent = false;
    this.notificationFinishedSent = false;
    localStorage.removeItem('countdownNotification12h');
    localStorage.removeItem('countdownNotificationFinished');
    
    const config = {
      name: this.countdownName,
      targetDate: targetDate.toISOString()
    };
    localStorage.setItem('countdownConfig', JSON.stringify(config));
    
    this.showCountdownTimer = true;
    this.closeCountdownConfig();
    this.startCountdown();
    this.showSuccessNotification('Cronómetro configurado correctamente');
    
    // Format detailed time remaining
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    let timeRemaining = '';
    if (days > 0) {
      timeRemaining = `${days} día${days > 1 ? 's' : ''}, ${hours} hora${hours > 1 ? 's' : ''}`;
    } else if (hours > 0) {
      timeRemaining = `${hours} hora${hours > 1 ? 's' : ''}, ${minutes} minuto${minutes > 1 ? 's' : ''}`;
    } else {
      timeRemaining = `${minutes} minuto${minutes > 1 ? 's' : ''}`;
    }
    
    // Format date for display
    const dateStr = targetDate.toLocaleString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    // Send push notification about new timer with detailed info
    this.notificationService.showNativePushNotification(
      '⏰ ' + this.countdownName,
      `Fecha: ${dateStr}. Tiempo: ${timeRemaining}`
    );
    
    // Track activity
    this.addActivity('timer', `Cronómetro configurado: ${this.countdownName} - ${dateStr}`);
  }

  startCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    
    this.updateCountdown();
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    if (!this.countdownTargetDate) return;
    
    const target = new Date(this.countdownTargetDate).getTime();
    const now = new Date().getTime();
    const distance = target - now;
    
    // Check if timer finished
    if (distance < 0) {
      this.countdownDays = '00';
      this.countdownHours = '00';
      this.countdownMinutes = '00';
      this.countdownSeconds = '00';
      
      // Send notification if not already sent
      if (!this.notificationFinishedSent) {
        this.notificationFinishedSent = true;
        localStorage.setItem('countdownNotificationFinished', 'true');
        this.notificationService.showNativePushNotification(
          this.countdownName,
          '¡El tiempo ha terminado!'
        );
        // Track activity - timer finished
        this.addActivity('check_circle', `Tiempo terminado: ${this.countdownName}`);
      }
      
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    this.countdownDays = days.toString().padStart(2, '0');
    this.countdownHours = hours.toString().padStart(2, '0');
    this.countdownMinutes = minutes.toString().padStart(2, '0');
    this.countdownSeconds = seconds.toString().padStart(2, '0');
    
    // Check if 12 hours remaining (43200000 ms = 12 hours)
    const twelveHours = 12 * 60 * 60 * 1000;
    if (distance <= twelveHours && !this.notification12HoursSent) {
      this.notification12HoursSent = true;
      localStorage.setItem('countdownNotification12h', 'true');
      
      let timeText = '';
      if (days > 0) {
        timeText = `${days} día(s) y ${hours} hora(s)`;
      } else if (hours > 0) {
        timeText = `${hours} hora(s) y ${minutes} minuto(s)`;
      } else {
        timeText = `${minutes} minuto(s)`;
      }
      
      this.notificationService.showNativePushNotification(
        this.countdownName,
        `Faltan ${timeText}`
      );
      // Track activity - 12 hours remaining
      this.addActivity('schedule', `Recordatorio ${this.countdownName}: Faltan ${timeText}`);
    }
  }

  // Send Notification Form Data
  newNotification = {
    title: '',
    message: '',
    recipientType: 'ALL' as 'PARENTS' | 'TEACHERS' | 'ADMINISTRATORS' | 'ALL'
  };

  // Notification System Methods
  showSuccessNotification(message: string) {
    this.notificationType = 'success';
    this.notificationMessage = message;
    this.showNotification = true;

    setTimeout(() => {
      this.hideNotification();
    }, 3000);
  }

  showErrorNotification(message: string) {
    this.notificationType = 'error';
    this.notificationMessage = message;
    this.showNotification = true;

    setTimeout(() => {
      this.hideNotification();
    }, 4000);
  }

  hideNotification() {
    this.showNotification = false;
    setTimeout(() => {
      this.notificationType = null;
      this.notificationMessage = '';
    }, 300);
  }

  // Dynamic Recent Activities
  recentActivities: Activity[] = [];
  private readonly ACTIVITIES_KEY = 'recent_activities';
  private readonly MAX_ACTIVITIES = 5;

  constructor() {
    // Subscribe to auth service user changes to stay in sync
    this.authService.currentUser$.subscribe(user => {
      console.log('Dashboard - Auth service user updated:', user);
      this.currentUser.set(user);
    });
    
    // Load recent activities from localStorage
    this.loadRecentActivities();
    
    // Listen for grade updates from the grades component
    effect(() => {
      // Access the signal to create a dependency
      this.gradesUpdateService.gradesUpdated();
      // Show loading state and refresh the grade count when grades are updated
      this.reportCardsLoaded = false;
      this.loadReportCardCount();
    });
  }

  loadRecentActivities() {
    const saved = localStorage.getItem(this.ACTIVITIES_KEY);
    if (saved) {
      this.recentActivities = JSON.parse(saved);
    } else {
      // Default empty
      this.recentActivities = [];
    }
  }

  saveRecentActivities() {
    localStorage.setItem(this.ACTIVITIES_KEY, JSON.stringify(this.recentActivities));
  }

  addActivity(icon: string, description: string) {
    const activity: Activity = {
      icon: icon,
      description: description,
      timestamp: Date.now()
    };
    
    // Add to beginning
    this.recentActivities.unshift(activity);
    
    // Keep only max activities
    if (this.recentActivities.length > this.MAX_ACTIVITIES) {
      this.recentActivities = this.recentActivities.slice(0, this.MAX_ACTIVITIES);
    }
    
    this.saveRecentActivities();
  }
  
  // Format timestamp to readable time
  formatActivityTime(timestamp: number): string {
    const now = Date.now();
    const diff = now - timestamp;
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (minutes < 1) {
      return 'Ahora';
    } else if (minutes < 60) {
      return `Hace ${minutes} min`;
    } else if (hours < 24) {
      return `Hace ${hours} hr`;
    } else if (days === 1) {
      return 'Ayer';
    } else {
      // Return date
      const date = new Date(timestamp);
      return date.toLocaleDateString('es-CO', { month: 'short', day: 'numeric' });
    }
  }
  
  // Greeting with time-based message from IA
  greetingText = '';
  greetingLetters: string[] = [];
  private greetingLoaded = false;
  
  generateGreeting() {
    if (this.greetingLoaded) return;
    
    const user = this.currentUser();
    const userId = user?.id ? user.id.toString() : '';
    const userName = user?.name ? user.name.split(' ')[0] : '';
    
    console.log('📡 Fetching AI-generated greeting from backend...');
    
    const url = userId 
      ? `http://localhost:8080/api/greeting?userId=${encodeURIComponent(userId)}&userName=${encodeURIComponent(userName)}`
      : 'http://localhost:8080/api/greeting';
    
    this.http.get<{timeOfDay: string, message: string, firstTime?: boolean}>(url).subscribe({
      next: (response) => {
        console.log('✅ AI Greeting received:', response.message);
        
        this.greetingText = response.message;
        this.greetingLoaded = true;
        this.animateGreeting(this.greetingText);
      },
      error: (error) => {
        console.warn('⚠️ Failed to fetch AI greeting, using fallback:', error);
        this.generateFallbackGreeting();
      }
    });
  }
  
  private generateFallbackGreeting() {
    const hour = new Date().getHours();
    let baseGreeting = '';
    
    if (hour >= 5 && hour < 12) {
      baseGreeting = 'Buenos días';
    } else if (hour >= 12 && hour < 18) {
      baseGreeting = 'Buenas tardes';
    } else {
      baseGreeting = 'Buenas noches';
    }
    
    const user = this.currentUser();
    const userName = user?.name ? user.name.split(' ')[0] : '';
    
    this.greetingText = userName ? `${baseGreeting}, ${userName}` : baseGreeting;
    this.greetingLoaded = true;
    this.animateGreeting(this.greetingText);
  }
  
  private animateGreeting(text: string) {
    this.greetingLetters = [];
    const chars = text.split('');
    const middle = Math.floor(chars.length / 2);
    
    let delay = 0;
    for (let i = 0; i <= middle; i++) {
      setTimeout(() => {
        if (chars[middle - i]) this.greetingLetters[middle - i] = chars[middle - i];
        if (chars[middle + i] && i > 0) this.greetingLetters[middle + i] = chars[middle + i];
      }, delay);
      delay += 30;
    }
  }

  ngOnInit() {
    console.log('Dashboard - ngOnInit starting...');
    
    // Generate initial greeting
    this.generateGreeting();
    
    // Load dashboard data
    this.loadUserData();
    this.loadDashboardData();
    
    // Load countdown timer configuration
    this.loadCountdownConfig();
  }

  private loadUserData() {
    this.currentUser.set(null);
    this.teacherSubjects = [];
    this.homeroomAssignment = null;

    if (this.authService.isAuthenticated()) {
      this.authService.getCurrentUser().subscribe({
        next: (user) => {
          console.log('Panel - Usuario cargado:', user);
          if (user && user.id) {
            this.loadHomeroomAssignment(user.id);
            if (user.role && (user.role.name === 'TEACHER' || user.role.name === 'DIRECTOR_DE_GRUPO')) {
              this.isTeacherUser = true;
              this.loadTeacherSubjects(user.id);
            }
          }
        },
        error: (err) => {
          console.error('Error al cargar el usuario en el panel:', err);
          this.currentUser.set(null);
          this.isTeacherUser = false;
        }
      });
    } else {
      console.log('Usuario no autenticado');
      this.currentUser.set(null);
      this.isTeacherUser = false;
    }
  }

  private loadTeacherSubjects(teacherId: number) {
    this.http.get<any[]>(`http://localhost:8080/api/subjects/teacher/${teacherId}`).subscribe({
      next: (subjects) => {
        this.teacherSubjects = subjects
          .filter(s => s.name && s.name.trim().length > 0)
          .map(s => s.name.trim());
      },
      error: () => {
        this.teacherSubjects = [];
      }
    });
  }

  private loadHomeroomAssignment(userId: number) {
    this.homeroomAssignment = null;
    this.http.get<any>(`http://localhost:8080/api/homeroom-assignments/by-user/${userId}`).subscribe({
      next: (assignment) => {
        this.homeroomAssignment = assignment;
      },
      error: () => {
        this.homeroomAssignment = null;
      }
    });
  }

  getUserInitials(): string {
    const user = this.currentUser();
    if (user && user.name && user.surname) {
      return (user.name.charAt(0) + user.surname.charAt(0)).toUpperCase();
    } else if (user && user.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return '';
  }

  getDisplayUsername(): string {
    const user = this.currentUser();
    if (user && user.username) {
      return user.username;
    }
    return '';
  }

  getDisplayName(): string {
    const user = this.currentUser();
    if (user) {
      const fullName = `${user.name || ''} ${user.surname || ''}`.trim();
      return fullName || user.username || 'Usuario sin nombre';
    }
    return 'Usuario sin autenticar';
  }

  getClassroomLetter(classroom: string): string {
    const match = classroom.match(/([A-Za-z])$/);
    return match ? match[1].toUpperCase() : '';
  }

  getHomeroomAssignmentLabel(): string {
    if (!this.homeroomAssignment) return '';
    const grade = this.homeroomAssignment.grade || '';
    const classroomLetter = this.getClassroomLetter(this.homeroomAssignment.classroom || '');
    return `Director ${grade}${classroomLetter ? ' ' + classroomLetter : ''}`.trim();
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
      'DIRECTOR_DE_GRUPO': 'Director de Grupo'
    };
    
    return roleTranslations[roleName] || roleName;
  }

  // Helper method to ensure profile picture URLs are correct (same as settings component)
  getCorrectImageUrl(imagePath: string | null): string | null {
    if (!imagePath) return null;
    
    if (imagePath.startsWith('http')) {
      return imagePath; // Already a full URL
    }
    
    // Construct full URL for relative paths using backend port 8080
    const fullUrl = `http://localhost:8080${imagePath}`;
    console.log('🔧 Dashboard - Converted image URL:', imagePath, '->', fullUrl);
    return fullUrl;
  }

  // Enhanced image error handler with fallback (same as settings component)
  onImageError(event: any) {
    console.error('❌ Dashboard - Image failed to load:', event.target.src);
    
    // Check if this is a profile picture that failed to load
    const img = event.target;
    if (img.src.includes('/uploads/profile-pictures/')) {
      console.log('🔄 Dashboard - Profile picture failed to load, falling back to initials');
      
      // Hide the broken image and show initials instead
      img.style.display = 'none';
      
      // Find the parent container and ensure initials are visible
      const parent = img.parentElement;
      if (parent) {
        // Remove any existing initials div and create a new one
        const existingInitials = parent.querySelector('.user-initials-fallback');
        if (existingInitials) {
          existingInitials.remove();
        }
        
        const initialsDiv = document.createElement('div');
        initialsDiv.className = 'profile-initials user-initials-fallback';
        initialsDiv.textContent = this.getUserInitials();
        parent.appendChild(initialsDiv);
      }
    }
  }

  private loadDashboardData() {
    // Start loading - reset flags
    this.studentsLoaded = false;
    this.reportCardsLoaded = false;
    
    console.log('=== LOADING ALL DASHBOARD DATA ===');
    
    // Load all counts in parallel for speed
    this.loadStudentCount();
    this.loadReportCardCount();
    
    // Keep these as static for now until we implement their services
    this.totalSubjects = 8;
    this.totalReports = 45;
  }

  private loadStudentCount() {
    console.log('📊 Loading student count...');
    const url = 'http://localhost:8080/api/students';
    
    this.http.get<any[]>(url).subscribe({
      next: (students) => {
        this.totalStudents = students.length;
        this.studentsLoaded = true;
        console.log('✅ Student count loaded:', this.totalStudents);
      },
      error: (error) => {
        console.error('❌ Failed to load student count:', error);
        this.totalStudents = 0;
        this.studentsLoaded = true;
      }
    });
  }

  private loadReportCardCount() {
    console.log('📊 Loading grade count...');
    // Use teacher-specific endpoint if user is a teacher, otherwise use general count
    const url = this.isTeacherUser ? 'http://localhost:8080/api/grades/count/teacher' : 'http://localhost:8080/api/grades/count';
    
    this.http.get<any>(url).subscribe({
      next: (response) => {
        this.totalGrades = response.count || 0;
        this.reportCardsLoaded = true;
        console.log('✅ Grade count loaded:', this.totalGrades);
      },
      error: (error) => {
        console.error('❌ Failed to load grade count:', error);
        this.totalGrades = 0;
        this.reportCardsLoaded = true;
      }
    });
  }

  // ========== MODAL METHODS ==========
  
  // Add Student Modal Methods
  openAddStudentModal() {
    console.log('=== OPENING ADD STUDENT MODAL ===');
    this.resetStudentForm();
    this.showAddStudentModal = true;
  }

  closeAddStudentModal() {
    console.log('=== CLOSING ADD STUDENT MODAL ===');
    this.showAddStudentModal = false;
    this.resetStudentForm();
  }

  resetStudentForm() {
    this.newStudent = {
      name: '',
      surname: '',
      documentNumber: '',
      grade: 'Grado 1º',
      classGroup: 'Salon A'
    };
    this.isSavingStudent = false;
  }

  addStudent() {
    console.log('=== ADDING STUDENT FROM DASHBOARD ===');
    
    if (!this.newStudent.name || !this.newStudent.surname) {
      alert('Por favor complete los campos obligatorios (nombres y apellidos)');
      return;
    }

    this.isSavingStudent = true;
    
    const studentData = {
      name: this.newStudent.name.trim(),
      surname: this.newStudent.surname.trim(),
      grade: this.newStudent.grade,
      classGroup: this.newStudent.classGroup,
      documentNumber: this.newStudent.documentNumber?.trim() || null
    };

    const saveUrl = 'http://localhost:8080/api/students';
    
    this.http.post(saveUrl, studentData).subscribe({
      next: (response) => {
        console.log('✅ Student added from dashboard:', response);
        this.closeAddStudentModal();
        this.showSuccessNotification(`El estudiante "${studentData.name} ${studentData.surname}" fue agregado correctamente`);
        
        // Format grade for notification
        const gradeText = studentData.grade ? `Grado ${studentData.grade}` : '';
        const classText = studentData.classGroup ? ` - Grupo ${studentData.classGroup}` : '';
        const gradeInfo = gradeText + classText;
        
        // Send push notification about new student
        this.notificationService.showNativePushNotification(
          '👨‍🎓 Nuevo estudiante registrado',
          `${studentData.name} ${studentData.surname}${gradeInfo ? ' - ' + gradeInfo : ''}`
        );
        
        // Track activity
        this.addActivity('person_add', `Nuevo estudiante: ${studentData.name} ${studentData.surname}${gradeInfo ? ' (' + gradeInfo + ')' : ''}`);
        
        // Refresh student count
        this.loadStudentCount();
      },
      error: (error) => {
        console.error('❌ Failed to add student:', error);
        this.showErrorNotification('Error al agregar el estudiante. Verifique que el servidor esté ejecutándose.');
        this.isSavingStudent = false;
      }
    });
  }

  // Add Grade Modal Methods
  openAddGradeModal() {
    console.log('=== OPENING ADD GRADE MODAL ===');
    this.resetGradeForm();
    this.showAddGradeModal = true;
  }

  closeAddGradeModal() {
    console.log('=== CLOSING ADD GRADE MODAL ===');
    this.showAddGradeModal = false;
    this.resetGradeForm();
  }

  resetGradeForm() {
    this.newGrade = {
      name: '',
      description: ''
    };
    this.isSavingGrade = false;
  }

  addGrade() {
    console.log('=== ADDING GRADE FROM DASHBOARD ===');
    
    if (!this.newGrade.name) {
      alert('Por favor complete el nombre del grado');
      return;
    }

    this.isSavingGrade = true;
    
    // For now, just simulate adding a grade
    // In a real implementation, this would call an API
    setTimeout(() => {
      console.log('✅ Grade added:', this.newGrade);
      this.closeAddGradeModal();
      alert(`¡Grado "${this.newGrade.name}" agregado exitosamente!`);
      this.isSavingGrade = false;
      
      // Update count
      this.totalSubjects += 1;
    }, 1000);
  }

  // Add Subject Modal Methods
  openAddSubjectModal() {
    console.log('=== OPENING ADD SUBJECT MODAL ===');
    this.resetSubjectForm();
    this.showAddSubjectModal = true;
  }

  closeAddSubjectModal() {
    console.log('=== CLOSING ADD SUBJECT MODAL ===');
    this.showAddSubjectModal = false;
    this.resetSubjectForm();
  }

  resetSubjectForm() {
    this.newSubject = {
      name: '',
      code: '',
      grade: 'Grado 1º',
      hoursPerWeek: 1,
      credits: 1,
      type: 'core'
    };
    this.isSavingSubject = false;
  }

  addSubject() {
    console.log('=== ADDING SUBJECT FROM DASHBOARD ===');
    
    if (!this.newSubject.name || !this.newSubject.code) {
      alert('Por favor complete el nombre y código de la materia');
      return;
    }

    this.isSavingSubject = true;
    
    // For now, just simulate adding a subject
    // In a real implementation, this would call an API
    setTimeout(() => {
      console.log('✅ Subject added:', this.newSubject);
      this.closeAddSubjectModal();
      alert(`¡Materia "${this.newSubject.name}" agregada exitosamente!`);
      this.isSavingSubject = false;
      
      // Update count
      this.totalSubjects += 1;
    }, 1000);
  }

  // View Reports Modal Methods
  openViewReportsModal() {
    console.log('=== OPENING VIEW REPORTS MODAL ===');
    this.showViewReportsModal = true;
  }

  closeViewReportsModal() {
    console.log('=== CLOSING VIEW REPORTS MODAL ===');
    this.showViewReportsModal = false;
  }

  generateReport() {
    console.log('=== GENERATING REPORT ===');
    alert('Funcionalidad de generación de reportes en desarrollo...');
  }



  // ========== ADMIN METHODS ==========

  isAdmin(): boolean {
    const user = this.currentUser();
    return user && user.role && user.role.name === 'ADMIN';
  }

  // Send Notification Modal Methods
  openSendNotificationModal() {
    console.log('=== OPENING SEND NOTIFICATION MODAL ===');
    this.resetNotificationForm();
    this.showSendNotificationModal = true;
  }

  closeSendNotificationModal() {
    console.log('=== CLOSING SEND NOTIFICATION MODAL ===');
    this.showSendNotificationModal = false;
    this.resetNotificationForm();
  }

  resetNotificationForm() {
    this.newNotification = {
      title: '',
      message: '',
      recipientType: 'ALL'
    };
    this.isSendingNotification = false;
  }

  sendNotification() {
    console.log('=== SENDING NOTIFICATION ===');
    
    if (!this.newNotification.title || !this.newNotification.message) {
      alert('Por favor complete el título y mensaje de la notificación');
      return;
    }

    this.isSendingNotification = true;

    // Crear notificaciones para los destinatarios seleccionados usando el backend optimizado

    const sendNotificationByRole = (): Promise<any> => {
      const notificationData = {
        title: this.newNotification.title,
        message: this.newNotification.message,
        type: 'ADMIN_MESSAGE',
        recipientType: this.newNotification.recipientType
      };

      return new Promise((resolve, reject) => {
        this.http.post('http://localhost:8080/api/notifications/send', notificationData).subscribe({
          next: (response) => {
            console.log('✅ Notifications sent by role:', this.newNotification.recipientType);
            resolve(response);
          },
          error: (error) => {
            console.error('❌ Failed to send notifications by role:', error);
            reject(error);
          }
        });
      });
    };

    // Enviar notificaciones por rol usando el backend optimizado
    sendNotificationByRole().then(() => {
      console.log('✅ All notifications sent successfully by role');
      this.closeSendNotificationModal();
      
      // Mostrar animación de éxito
      this.showSuccessAnimation();
      
      this.isSendingNotification = false;
    }).catch(error => {
      console.error('❌ Failed to send notifications by role:', error);
      alert('Error al enviar las notificaciones. Inténtelo de nuevo.');
      this.isSendingNotification = false;
    });
  }

  private showSuccessAnimation() {
    // Crear elemento de animación de éxito mejorado
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 30px 50px;
      border-radius: 16px;
      font-size: 20px;
      font-weight: 600;
      z-index: 10000;
      box-shadow: 0 20px 60px rgba(16, 185, 129, 0.4);
      animation: successPulse 0.8s ease-out;
      min-width: 300px;
      text-align: center;
    `;
    
    successDiv.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <div class="checkmark-container" style="
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: checkmarkBounce 0.6s ease-out 0.3s both;
        ">
          <svg class="checkmark" width="32" height="32" viewBox="0 0 52 52" style="
            animation: checkmarkStroke 0.6s ease-out 0.5s both;
          ">
            <path class="checkmark__check" fill="none" d="m9 16 11 11 25-25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div style="font-size: 18px; font-weight: 600;">¡Notificación Enviada!</div>
        <div style="font-size: 14px; opacity: 0.9;">Todos los destinatarios recibieron el mensaje</div>
      </div>
    `;
    
    // Agregar estilos de animación mejorados
    const style = document.createElement('style');
    style.textContent = `
      @keyframes successPulse {
        0% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.3) rotate(-10deg);
        }
        50% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.1) rotate(2deg);
        }
        100% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1) rotate(0deg);
        }
      }
      
      @keyframes checkmarkBounce {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(1.2);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      
      @keyframes checkmarkStroke {
        0% {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
        }
        100% {
          stroke-dasharray: 166;
          stroke-dashoffset: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(successDiv);
    
    // Remover después de 3 segundos
    setTimeout(() => {
      successDiv.style.animation = 'successPulse 0.4s ease-out reverse';
      setTimeout(() => {
        successDiv.remove();
        style.remove();
      }, 400);
    }, 3000);
  }
}
