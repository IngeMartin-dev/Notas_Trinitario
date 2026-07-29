import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

export interface PushNotificationPayload {
  title: string;
  body: string;
  icon?: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class FirebasePushService {
  private readonly http = inject(HttpClient);
  private readonly API_BASE = 'http://localhost:8080/api/notifications';
  
  private initialized = false;

  constructor() {
    this.initializeService();
  }

  /**
   * Inicializar el servicio
   */
  private initializeService(): void {
    if (typeof window === 'undefined') {
      console.log('Firebase Push no disponible en SSR');
      this.initialized = true;
      return;
    }

    this.initialized = true;
    console.log('Firebase Push Service inicializado (modo notificaciones nativas del navegador)');
  }

  /**
   * Solicitar permiso de notificaciones y guardar token
   */
  async requestPermissionAndGetToken(userId: number): Promise<string | null> {
    if (!('Notification' in window)) {
      console.log('Este navegador no soporta notificaciones push');
      return null;
    }

    try {
      const permission = await Notification.requestPermission();
      
      if (permission !== 'granted') {
        console.log('Permiso de notificaciones denegado');
        return null;
      }

      // Generar token local único
      const localToken = `local_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      
      // Guardar token en el servidor
      await this.saveTokenToServer(userId, localToken, 'web-push');
      
      console.log('Token de notificaciones guardado exitosamente');
      return localToken;
      
    } catch (error) {
      console.error('Error solicitando permiso de notificaciones:', error);
      return null;
    }
  }

  /**
   * Guardar token en el servidor
   */
  private async saveTokenToServer(userId: number, token: string, deviceType: string = 'web'): Promise<void> {
    try {
      const deviceInfo = this.getDeviceInfo();
      
      await this.http.post(`${this.API_BASE}/fcm-token`, {
        userId: userId,
        token: token,
        deviceType: deviceType || deviceInfo.deviceType,
        deviceName: deviceInfo.deviceName
      }).toPromise();
      
      console.log('Token guardado en el servidor exitosamente');
    } catch (error) {
      console.error('Error guardando token en el servidor:', error);
    }
  }

  /**
   * Obtener información del dispositivo
   */
  private getDeviceInfo(): { deviceType: string; deviceName: string } {
    const userAgent = navigator.userAgent || '';
    let deviceType = 'web';
    let deviceName = 'Web Browser';

    if (/mobile/i.test(userAgent)) {
      deviceType = 'mobile';
    }
    
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      deviceType = 'ios';
      deviceName = 'iOS Device';
    } else if (/Android/.test(userAgent)) {
      deviceType = 'android';
      deviceName = 'Android Device';
    } else if (/Windows/.test(userAgent)) {
      deviceName = 'Windows PC';
    } else if (/Mac/.test(userAgent)) {
      deviceName = 'Mac';
    } else if (/Linux/.test(userAgent)) {
      deviceName = 'Linux PC';
    }

    return { deviceType, deviceName };
  }

  /**
   * Mostrar notificación push
   * Útil para mostrar notificaciones cuando la app está abierta
   * o cuando llega una notificación del servidor
   */
  showPushNotification(title: string, body: string, data?: any): void {
    if (Notification.permission !== 'granted') {
      console.log('No hay permiso para mostrar notificaciones');
      return;
    }

    const notification = new Notification(title, {
      body: body,
      icon: '/Logo Colegio.png',
      badge: '/Logo Colegio.png',
      tag: 'notas-trinitario-push',
      requireInteraction: true,
      data: data
    });

    notification.onclick = (event) => {
      event.preventDefault();
      window.focus();
      notification.close();
      
      if (data?.type) {
        console.log('Notificación clickeada, tipo:', data.type);
      }
    };

    // Auto close después de 8 segundos
    setTimeout(() => {
      notification.close();
    }, 8000);
  }

  /**
   * Eliminar tokens del servidor
   */
  removeTokenFromServer(userId: number): Observable<any> {
    return this.http.delete(`${this.API_BASE}/fcm-token/user/${userId}`).pipe(
      tap(() => {
        console.log('Tokens eliminados del servidor');
      }),
      catchError(error => {
        console.error('Error eliminando tokens:', error);
        return EMPTY;
      })
    );
  }

  /**
   * Verificar si el servicio está inicializado
   */
  isInitialized(): boolean {
    return this.initialized;
  }

  /**
   * Verificar si hay permiso de notificaciones
   */
  hasNotificationPermission(): boolean {
    return Notification.permission === 'granted';
  }

  /**
   * Obtener estado actual del permiso
   */
  getPermissionStatus(): NotificationPermission | 'unsupported' {
    if (!('Notification' in window)) {
      return 'unsupported';
    }
    return Notification.permission;
  }
}
