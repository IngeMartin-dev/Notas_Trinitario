import { Component, Input, Output, EventEmitter, inject, OnInit } from '@angular/core';

import { MessageService, Message } from './services/message.service';
import { NotificationService, Notification } from './services/notification.service';

export interface MessageClickEvent {
  item: Message | Notification;
  type: 'message' | 'notification';
  action: 'view' | 'reply';
}

@Component({
  selector: 'app-messages-dropdown',
  standalone: true,
  imports: [],
  template: `
    @if (isOpen) {
      <div class="messages-dropdown" [class.dropdown-open]="isOpen">
        <div class="dropdown-header">
          <h3>Notificaciones y Mensajes</h3>
          <button class="close-btn" (click)="closeDropdown()">
            <span class="material-icons">close</span>
          </button>
        </div>
        @if (hasContent()) {
          <div class="combined-list">
            <!-- Notifications -->
            @for (notification of filteredNotifications; track trackByNotificationId($index, notification)) {
              <div
                class="notification-item"
                [class.unread]="isNotificationNewlyArrived(notification)"
                [class.deleting]="deletingItems.has(notification.id)"
                (click)="markAsReadAndClose(notification, 'notification')">
                <div class="notification-content">
                  <div class="notification-header">
                    <div class="sender-info">
                      <span class="material-icons notifications-icon">notifications</span>
                      <strong>{{ notification.title }}</strong>
                    </div>
                    <div class="item-time">{{ formatNotificationTime(notification.createdAt) }}</div>
                  </div>
                  <div class="notification-text">{{ notification.message }}</div>
                </div>
                @if (isNotificationNewlyArrived(notification)) {
                  <div class="notification-status">
                    <span class="unread-dot notification-dot"></span>
                  </div>
                }
              </div>
            }
            <!-- Messages/Responses -->
            @for (message of filteredMessages; track trackByMessageId($index, message)) {
              <div
                class="message-item"
                [class.unread]="!message.isRead"
                [class.deleting]="deletingItems.has(message.id)"
                (click)="markAsReadAndClose(message, 'message')">
                <div class="message-content">
                  <div class="message-header">
                    <div class="sender-info">
                      <span class="material-icons message-icon">mail</span>
                      <strong>{{ message.senderName }} {{ message.senderSurname }}</strong>
                      <span class="reply-indicator">respondió a:</span>
                    </div>
                    <div class="item-time">{{ formatMessageTime(message.createdAt) }}</div>
                  </div>
                  <div class="original-notification">
                    <span class="notification-title">"{{ message.originalNotificationTitle }}"</span>
                  </div>
                  <div class="message-text">{{ message.replyMessage }}</div>
                </div>
                @if (!message.isRead) {
                  <div class="message-status">
                    <span class="unread-dot message-dot"></span>
                  </div>
                }
              </div>
            }
          </div>
        } @else {
          <div class="empty-state">
            <span class="material-icons">mail_outline</span>
            <p>No tienes notificaciones ni mensajes</p>
          </div>
        }
        @if (hasContent()) {
          <div class="dropdown-footer">
            <div class="footer-buttons">
              <button
                class="mark-all-read-btn"
                [disabled]="!hasUnreadItems()"
                [class.disabled]="!hasUnreadItems()"
                (click)="markAllAsRead()">
                Marcar todos como leídos
              </button>
              <button
                class="delete-notifications-btn"
                (click)="deleteAllNotifications()">
                Eliminar notificaciones
              </button>
            </div>
          </div>
        }
      </div>
    }
    `,
  styles: [`
    .messages-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      width: 400px;
      min-height: 200px;
      max-height: min(500px, 70vh);
      background: var(--surface);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-md);
      border: 1px solid var(--border);
      z-index: 1000;
      animation: dropdownSlide 0.2s ease-out;
      overflow: hidden;
    }

    .dropdown-open {
      transform: translateY(0);
    }

    @keyframes dropdownSlide {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .dropdown-header {
      padding: 20px 20px 16px;
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .dropdown-header h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: var(--text-1);
    }

    .close-btn {
      background: none;
      border: none;
      padding: 4px;
      border-radius: 50%;
      cursor: pointer;
      color: var(--text-3);
      transition: all 0.18s ease;
    }

    .close-btn:hover {
      background: var(--surface-2);
      color: var(--text-1);
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--brand);
      outline-offset: 2px;
    }

    .messages-list {
      max-height: 350px;
      overflow-y: auto;
    }

    .message-item {
      padding: 16px 20px;
      border-bottom: 1px solid var(--border);
      cursor: pointer;
      transition: background-color 0.15s ease;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      position: relative;
    }

    .message-item:hover {
      background: var(--surface-2);
    }

    .message-item.unread {
      background: var(--brand-50);
      border-left: 3px solid var(--brand);
    }

    .message-item.unread:hover {
      background: var(--brand-100);
    }

    .message-content {
      flex: 1;
      min-width: 0;
    }

    .message-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
    }

    .sender-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .sender-info strong {
      font-size: 14px;
      color: var(--text-1);
    }

    .reply-indicator {
      font-size: 12px;
      color: var(--text-3);
      font-weight: normal;
    }

    .original-notification {
      margin-bottom: 8px;
    }

    .notification-title {
      font-size: 12px;
      color: var(--text-3);
      font-style: italic;
      background: var(--surface-2);
      padding: 2px 8px;
      border-radius: var(--r-sm);
      border: 1px solid var(--border);
    }

    .message-text {
      font-size: 13px;
      color: var(--text-2);
      line-height: 1.4;
      word-wrap: break-word;
      overflow-wrap: break-word;
      overflow: hidden;
      display: -webkit-box;
      display: box;
      line-clamp: 3;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      box-orient: vertical;
    }

    .message-time {
      font-size: 11px;
      color: var(--text-4);
      white-space: nowrap;
      margin-top: 2px;
    }

    .message-status {
      flex-shrink: 0;
      padding-top: 2px;
    }

    .unread-dot {
      width: 8px;
      height: 8px;
      background: var(--brand);
      border-radius: 50%;
    }

    .empty-state {
      padding: 40px 20px;
      text-align: center;
      color: var(--text-3);
    }

    .empty-state .material-icons {
      font-size: 48px;
      margin-bottom: 12px;
      opacity: 0.5;
    }

    .empty-state p {
      margin: 0;
      font-size: 14px;
    }

    .dropdown-footer {
      padding: 12px 20px;
      border-top: 1px solid var(--border);
      background: var(--surface-2);
    }

    .footer-buttons {
      display: flex;
      gap: 8px;
    }

    .mark-all-read-btn {
      flex: 1;
      padding: 8px 12px;
      background: var(--brand);
      color: white;
      border: none;
      border-radius: var(--r-sm);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.18s ease;
    }

    .delete-notifications-btn {
      flex: 1;
      padding: 8px 12px;
      background: var(--danger);
      color: white;
      border: none;
      border-radius: var(--r-sm);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.18s ease;
    }

    .delete-notifications-btn:hover {
      background: #b91c1c;
    }

    .notification-item.deleting,
    .message-item.deleting {
      animation: slideOutLeft 0.5s ease-in-out forwards;
    }

    @keyframes slideOutLeft {
      to {
        transform: translateX(-100%);
        opacity: 0;
      }
    }

    .mark-all-read-btn:hover {
      background: var(--brand-600);
    }

    .mark-all-read-btn:disabled,
    .mark-all-read-btn.disabled {
      background: var(--border-strong);
      color: var(--text-3);
      cursor: not-allowed;
      opacity: 0.6;
    }

    .mark-all-read-btn:disabled:hover,
    .mark-all-read-btn.disabled:hover {
      background: var(--border-strong);
      color: var(--text-3);
    }

    .combined-list {
      max-height: 350px;
      overflow-y: auto;
    }

    .notification-item {
      padding: 16px 20px;
      border-bottom: 1px solid var(--border);
      cursor: pointer;
      transition: background-color 0.15s ease;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      position: relative;
    }

    .notification-item:hover {
      background: var(--surface-2);
    }

    .notification-item.unread {
      background: var(--success-bg);
      border-left: 3px solid var(--success);
    }

    .notification-item.unread:hover {
      background: #d1fae5;
    }

    .notification-content {
      flex: 1;
      min-width: 0;
    }

    .notification-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
    }

    .sender-info {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sender-info strong {
      font-size: 14px;
      color: var(--text-1);
    }

    .notifications-icon {
      font-size: 18px;
      color: var(--success);
    }

    .message-icon {
      font-size: 18px;
      color: var(--brand);
    }

    .notification-text {
      font-size: 13px;
      color: var(--text-2);
      line-height: 1.4;
      word-wrap: break-word;
      overflow-wrap: break-word;
      overflow: hidden;
      display: -webkit-box;
      display: box;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      box-orient: vertical;
    }

    .item-time {
      font-size: 11px;
      color: var(--text-4);
      white-space: nowrap;
      margin-top: 2px;
    }

    .notification-status {
      flex-shrink: 0;
      padding-top: 2px;
    }

    .notification-dot {
      background: var(--success);
    }

    .message-dot {
      background: var(--brand);
    }

    /* Scrollbar styling */
    .combined-list::-webkit-scrollbar {
      width: 6px;
    }

    .combined-list::-webkit-scrollbar-track {
      background: transparent;
    }

    .combined-list::-webkit-scrollbar-thumb {
      background: var(--border-strong);
      border-radius: 3px;
    }

    .combined-list::-webkit-scrollbar-thumb:hover {
      background: var(--text-4);
    }

    @media (max-width: 480px) {
      .messages-dropdown {
        width: calc(100vw - 24px);
        max-width: none;
        right: 12px;
      }
    }
  `]
})
export class MessagesDropdownComponent implements OnInit {
  @Input() isOpen = false;
  @Input() notifications: Notification[] = [];
  @Input() messages: Message[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() messageClick = new EventEmitter<MessageClickEvent>();

  deletingItems = new Set<number>();
  deletedItems = new Set<number>();

  private messageService = inject(MessageService);
  private notificationService = inject(NotificationService);
  private readonly DELETED_STORAGE_KEY = 'deleted_notifications_messages';

  get filteredNotifications() {
    return this.notifications.filter(n => !this.deletedItems.has(n.id));
  }

  get filteredMessages() {
    return this.messages.filter(m => !this.deletedItems.has(m.id));
  }

  ngOnInit() {
    // Subscribe to messages changes if not provided via input
    this.messageService.getMessages().subscribe(messages => {
      if (this.messages.length === 0) {
        this.messages = messages;
      }
    });
    this.loadDeletedItems();
  }

  private loadDeletedItems(): void {
    try {
      const stored = localStorage.getItem(this.DELETED_STORAGE_KEY);
      if (stored) {
        const deletedIds = JSON.parse(stored);
        this.deletedItems = new Set(deletedIds);
      }
    } catch (error) {
      console.error('Error loading deleted items:', error);
      this.deletedItems.clear();
    }
  }

  private saveDeletedItems(): void {
    try {
      const deletedIds = Array.from(this.deletedItems);
      localStorage.setItem(this.DELETED_STORAGE_KEY, JSON.stringify(deletedIds));
    } catch (error) {
      console.error('Error saving deleted items:', error);
    }
  }

  closeDropdown() {
    this.isOpen = false;
    this.close.emit();
  }

  markAsReadAndClose(item: Message | Notification, type: 'message' | 'notification') {
    if (type === 'message' && !item.isRead) {
      this.messageService.markAsRead(item.id).subscribe();
    } else if (type === 'notification' && !item.isRead) {
      this.notificationService.markAsRead(item.id).subscribe();
    }
    this.messageClick.emit({
      item,
      type,
      action: 'view'
    });
    this.closeDropdown();
  }

  markAllAsRead() {
    const unreadMessages = this.messages.filter(m => !m.isRead);
    const unreadNotifications = this.notifications.filter(n => !n.isRead);

    unreadMessages.forEach(message => {
      this.messageService.markAsRead(message.id).subscribe();
    });

    unreadNotifications.forEach(notification => {
      this.notificationService.markAsRead(notification.id).subscribe();
    });
  }

  deleteAllNotifications() {
    // Animate removal one by one
    const allItems = [...this.filteredNotifications, ...this.filteredMessages];
    let index = 0;

    const removeNext = () => {
      if (index < allItems.length) {
        const item = allItems[index];
        // Add deleting class for animation
        this.deletingItems.add(item.id);
        // Mark as read
        if (this.notifications.find(n => n.id === item.id)) {
          this.notificationService.markAsRead(item.id).subscribe();
        } else {
          this.messageService.markAsRead(item.id).subscribe();
        }
        // Mark as deleted after animation
        setTimeout(() => {
          this.deletedItems.add(item.id);
          this.deletingItems.delete(item.id);
          this.saveDeletedItems();
        }, 500); // Match animation duration
        index++;
        setTimeout(removeNext, 200); // Delay for next item
      }
    };

    removeNext();
  }

  hasContent(): boolean {
    return this.filteredNotifications.length > 0 || this.filteredMessages.length > 0;
  }

  hasUnreadItems(): boolean {
    return this.filteredNotifications.some(n => !n.isRead) || this.filteredMessages.some(m => !m.isRead);
  }

  formatMessageTime(createdAt: string): string {
    return this.messageService.formatTimeAgo(createdAt);
  }

  formatNotificationTime(createdAt: string): string {
    return this.notificationService.formatTimeAgo(createdAt);
  }

  isNotificationNewlyArrived(notification: Notification): boolean {
    return this.notificationService.isNewlyArrived(notification);
  }

  trackByMessageId(index: number, message: Message): number {
    return message.id;
  }

  trackByNotificationId(index: number, notification: Notification): number {
    return notification.id;
  }
}