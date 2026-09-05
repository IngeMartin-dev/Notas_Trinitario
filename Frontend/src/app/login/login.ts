import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = signal('');
  password = signal('');
  errorMessage = signal('');
  isLoading = signal(false);
  buttonState = signal<'default' | 'success' | 'error'>('default');
  buttonText = signal('Iniciar Sesión');
  errorVisible = signal(false);
  errorHiding = signal(false);
  isFadingOut = signal(false);
  passwordVisible = signal(false);
  currentYear = new Date().getFullYear();
  private minLoadingTime = 1500; // Minimum spinner display time in ms
  private loadingStartTime = 0;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  togglePasswordVisibility() {
    this.passwordVisible.set(!this.passwordVisible());
  }

  onLogin() {
    this.errorMessage.set('');
    this.errorVisible.set(false);
    this.errorHiding.set(false);
    this.buttonState.set('default');
    this.buttonText.set('Iniciar Sesión');
    this.isLoading.set(true);
    this.loadingStartTime = Date.now();

    if (!this.username() || !this.password()) {
      this.errorMessage.set('Por favor ingrese usuario y contraseña');
      this.errorVisible.set(true);
      this.errorHiding.set(false);
      this.isLoading.set(false);
      setTimeout(() => {
        this.errorHiding.set(true);
        setTimeout(() => this.errorVisible.set(false), 500);
      }, 5000);
      return;
    }

    this.authService.login({
      username: this.username(),
      password: this.password()
    }).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        
        // Get current user info and register push token
        this.authService.getCurrentUser().subscribe({
          next: (user) => {
            if (user && user.id) {
              this.notificationService.registerPushToken(user.id);
            }
          },
          error: (err) => console.error('Error getting current user:', err)
        });
        
        const elapsed = Date.now() - this.loadingStartTime;
        const delay = Math.max(0, this.minLoadingTime - elapsed);
        setTimeout(() => {
          this.isLoading.set(false);
          this.buttonState.set('success');
          this.buttonText.set('Bienvenido');
          setTimeout(() => {
            this.isFadingOut.set(true);
            setTimeout(() => {
              this.router.navigate(['/dashboard']);
            }, 500);
          }, 1000);
        }, delay);
      },
      error: (error) => {
        console.error('Login error:', error);
        const elapsed = Date.now() - this.loadingStartTime;
        const delay = Math.max(0, this.minLoadingTime - elapsed);
        setTimeout(() => {
          this.isLoading.set(false);
          this.buttonState.set('error');
          this.buttonText.set('Incorrecto');
          this.errorMessage.set(error.message || 'Error al iniciar sesión');
          this.errorVisible.set(true);
          this.errorHiding.set(false);
          setTimeout(() => {
            this.errorHiding.set(true);
            setTimeout(() => {
              this.errorVisible.set(false);
              this.buttonState.set('default');
              this.buttonText.set('Iniciar Sesión');
            }, 500);
          }, 5000);
        }, delay);
      }
    });
  }
}
