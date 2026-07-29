import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { Chats } from './chats';
import { NotificationService } from '../services/notification.service';
import { of } from 'rxjs';

describe('Chats', () => {
  let component: Chats;
  let fixture: ComponentFixture<Chats>;
  let notificationServiceSpy: jasmine.SpyObj<NotificationService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('NotificationService', ['getNotifications', 'markAsRead']);
    spy.getNotifications.and.returnValue(of([]));
    spy.markAsRead.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      imports: [
        Chats,
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        { provide: NotificationService, useValue: spy }
      ]
    }).compileComponents();

    notificationServiceSpy = TestBed.inject(NotificationService) as jasmine.SpyObj<NotificationService>;
    fixture = TestBed.createComponent(Chats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load chats on init', () => {
    expect(notificationServiceSpy.getNotifications).toHaveBeenCalled();
  });

  it('should filter chats by search term', () => {
    component.chats = [
      {
        id: 1,
        name: 'Juan',
        surname: 'Pérez',
        lastMessage: 'Hola',
        lastMessageTime: 'Ahora',
        unreadCount: 1,
        isOnline: true,
        notifications: []
      },
      {
        id: 2,
        name: 'María',
        surname: 'García',
        lastMessage: 'Buenos días',
        lastMessageTime: '1h',
        unreadCount: 0,
        isOnline: false,
        notifications: []
      }
    ];
    component.filteredChats = [...component.chats];

    component.searchTerm = 'Juan';
    component.filterChats();

    expect(component.filteredChats.length).toBe(1);
    expect(component.filteredChats[0].name).toBe('Juan');
  });

  it('should select a chat', () => {
    const chat = {
      id: 1,
      name: 'Juan',
      surname: 'Pérez',
      lastMessage: 'Hola',
      lastMessageTime: 'Ahora',
      unreadCount: 1,
      isOnline: true,
      notifications: []
    };

    component.selectChat(chat);

    expect(component.selectedChat).toBe(chat);
  });

  it('should close chat', () => {
    component.selectedChat = {
      id: 1,
      name: 'Juan',
      surname: 'Pérez',
      lastMessage: 'Hola',
      lastMessageTime: 'Ahora',
      unreadCount: 0,
      isOnline: true,
      notifications: []
    };

    component.closeChat();

    expect(component.selectedChat).toBeNull();
    expect(component.selectedChatMessages.length).toBe(0);
  });

  it('should get correct initials', () => {
    expect(component.getInitials('Juan', 'Pérez')).toBe('JP');
    expect(component.getInitials('María', 'García')).toBe('MG');
  });

  it('should format time correctly', () => {
    const now = new Date();
    expect(component.formatTimeAgo(now.toISOString())).toBe('Ahora');

    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
    expect(component.formatTimeAgo(fiveMinutesAgo.toISOString())).toBe('5m');
  });

  it('should format message time', () => {
    const date = new Date('2024-01-15T14:30:00');
    const result = component.formatMessageTime(date.toISOString());
    expect(result).toContain(':');
  });

  it('should get correct image URL', () => {
    expect(component.getCorrectImageUrl(null)).toBe('');
    expect(component.getCorrectImageUrl(undefined)).toBe('');
    expect(component.getCorrectImageUrl('http://example.com/image.jpg')).toBe('http://example.com/image.jpg');
    expect(component.getCorrectImageUrl('/uploads/image.jpg')).toBe('http://localhost:8080/uploads/image.jpg');
  });

  it('should track chats by id', () => {
    const chat = {
      id: 1,
      name: 'Juan',
      surname: 'Pérez',
      lastMessage: 'Hola',
      lastMessageTime: 'Ahora',
      unreadCount: 1,
      isOnline: true,
      notifications: []
    };
    expect(component.trackByChatId(0, chat)).toBe(1);
  });

  it('should not send empty message', () => {
    component.selectedChat = {
      id: 1,
      name: 'Juan',
      surname: 'Pérez',
      lastMessage: 'Hola',
      lastMessageTime: 'Ahora',
      unreadCount: 0,
      isOnline: true,
      notifications: []
    };
    component.newMessage = '   ';
    
    const initialLength = component.selectedChatMessages.length;
    component.sendMessage();
    
    expect(component.selectedChatMessages.length).toBe(initialLength);
  });
});
