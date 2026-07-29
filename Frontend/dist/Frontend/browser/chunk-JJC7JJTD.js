import {
  NotificationService
} from "./chunk-B2PPFIPW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TCE2U3R2.js";
import {
  Component,
  ViewChild,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-G4AEIR3O.js";

// src/app/chats/chats.ts
var _c0 = ["messagesContainer"];
function Chats_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Cargando chats...");
    \u0275\u0275elementEnd()();
  }
}
function Chats_Conditional_3_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const chat_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.getCorrectImageUrl(chat_r2.profilePicture), \u0275\u0275sanitizeUrl)("alt", chat_r2.name + " " + chat_r2.surname)("title", chat_r2.name + " " + chat_r2.surname);
  }
}
function Chats_Conditional_3_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chat_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInitials(chat_r2.name, chat_r2.surname), " ");
  }
}
function Chats_Conditional_3_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function Chats_Conditional_3_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chat_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chat_r2.unreadCount > 99 ? "99+" : chat_r2.unreadCount, " ");
  }
}
function Chats_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275listener("click", function Chats_Conditional_3_For_2_Template_div_click_0_listener() {
      const chat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectChat(chat_r2));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275conditionalCreate(2, Chats_Conditional_3_For_2_Conditional_2_Template, 1, 3, "img", 12)(3, Chats_Conditional_3_For_2_Conditional_3_Template, 2, 1, "div", 13);
    \u0275\u0275conditionalCreate(4, Chats_Conditional_3_For_2_Conditional_4_Template, 1, 0, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "div", 16)(7, "h3", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 19)(12, "p", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, Chats_Conditional_3_For_2_Conditional_14_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", (ctx_r2.selectedChat == null ? null : ctx_r2.selectedChat.id) === chat_r2.id)("unread", chat_r2.unreadCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(chat_r2.profilePicture ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(chat_r2.isOnline ? 4 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", chat_r2.name, " ", chat_r2.surname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(chat_r2.lastMessageTime);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(chat_r2.lastMessage);
    \u0275\u0275advance();
    \u0275\u0275conditional(chat_r2.unreadCount > 0 ? 14 : -1);
  }
}
function Chats_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, Chats_Conditional_3_For_2_Template, 15, 11, "div", 9, \u0275\u0275componentInstance().trackByChatId, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredChats);
  }
}
function Chats_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 22);
    \u0275\u0275text(2, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "No hay conversaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Las notificaciones aparecer\xE1n aqu\xED como chats");
    \u0275\u0275elementEnd()();
  }
}
function Chats_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 22);
    \u0275\u0275text(2, "forum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Notas Trinitario Chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Selecciona una conversaci\xF3n para ver los mensajes");
    \u0275\u0275elementEnd()();
  }
}
function Chats_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.getCorrectImageUrl(ctx_r2.selectedChat.profilePicture), \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedChat.name)("title", ctx_r2.selectedChat.name + " " + ctx_r2.selectedChat.surname);
  }
}
function Chats_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "En l\xEDnea");
    \u0275\u0275elementEnd();
  }
}
function Chats_Conditional_7_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getMessageDate(ctx_r2.selectedChatMessages[0].createdAt));
  }
}
function Chats_Conditional_7_For_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", message_r5.senderName, " ");
  }
}
function Chats_Conditional_7_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275conditionalCreate(1, Chats_Conditional_7_For_21_Conditional_1_Template, 2, 1, "div", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("sent", message_r5.isFromMe)("received", !message_r5.isFromMe);
    \u0275\u0275advance();
    \u0275\u0275conditional(!message_r5.isFromMe ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r5.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatMessageTime(message_r5.createdAt));
  }
}
function Chats_Conditional_7_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 22);
    \u0275\u0275text(2, "chat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "Inicia la conversaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Env\xEDa un mensaje para comenzar");
    \u0275\u0275elementEnd()();
  }
}
function Chats_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24);
    \u0275\u0275listener("click", function Chats_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeChat());
    });
    \u0275\u0275elementStart(2, "span", 22);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275conditionalCreate(5, Chats_Conditional_7_Conditional_5_Template, 1, 3, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, Chats_Conditional_7_Conditional_9_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26)(11, "button", 27)(12, "span", 22);
    \u0275\u0275text(13, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 28)(15, "span", 22);
    \u0275\u0275text(16, "more_vert");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 29, 0);
    \u0275\u0275conditionalCreate(19, Chats_Conditional_7_Conditional_19_Template, 3, 1, "div", 30);
    \u0275\u0275repeaterCreate(20, Chats_Conditional_7_For_21_Template, 6, 7, "div", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(22, Chats_Conditional_7_Conditional_22_Template, 7, 0, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 32)(24, "button", 33)(25, "span", 22);
    \u0275\u0275text(26, "attach_file");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function Chats_Conditional_7_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMessage, $event) || (ctx_r2.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function Chats_Conditional_7_Template_input_keyup_enter_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 35);
    \u0275\u0275listener("click", function Chats_Conditional_7_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275elementStart(29, "span", 22);
    \u0275\u0275text(30, "send");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.selectedChat.profilePicture ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedChat.name, " ", ctx_r2.selectedChat.surname);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedChat.isOnline ? 9 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r2.selectedChatMessages.length > 0 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedChatMessages);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedChatMessages.length === 0 ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newMessage.trim());
  }
}
var Chats = class _Chats {
  messagesContainer;
  notificationService = inject(NotificationService);
  chats = [];
  filteredChats = [];
  searchTerm = "";
  isLoading = true;
  selectedChat = null;
  selectedChatMessages = [];
  newMessage = "";
  ngOnInit() {
    this.loadChats();
  }
  loadChats() {
    this.isLoading = true;
    this.notificationService.getNotifications().subscribe({
      next: (notifications) => {
        const contactMap = /* @__PURE__ */ new Map();
        notifications.forEach((notification) => {
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
            if (new Date(notification.createdAt) > new Date(existingContact.lastMessageTime)) {
              existingContact.lastMessage = notification.message;
              existingContact.lastMessageTime = notification.createdAt;
            }
          }
        });
        this.chats = Array.from(contactMap.values()).sort((a, b) => new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime()).map((chat) => __spreadProps(__spreadValues({}, chat), {
          lastMessageTime: this.formatTimeAgo(chat.lastMessageTime)
        }));
        this.filteredChats = [...this.chats];
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading chats:", error);
        this.isLoading = false;
      }
    });
  }
  filterChats() {
    if (!this.searchTerm.trim()) {
      this.filteredChats = [...this.chats];
    } else {
      const searchLower = this.searchTerm.toLowerCase();
      this.filteredChats = this.chats.filter((chat) => chat.name.toLowerCase().includes(searchLower) || chat.surname.toLowerCase().includes(searchLower) || chat.lastMessage.toLowerCase().includes(searchLower));
    }
  }
  selectChat(chat) {
    this.selectedChat = chat;
    this.selectedChatMessages = chat.notifications.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()).map((notification) => ({
      id: notification.id,
      text: notification.message,
      senderName: `${notification.user.name} ${notification.user.surname}`,
      createdAt: notification.createdAt,
      isFromMe: false
    }));
    chat.notifications.forEach((notification) => {
      if (!notification.isRead) {
        this.notificationService.markAsRead(notification.id).subscribe();
      }
    });
    chat.unreadCount = 0;
    setTimeout(() => this.scrollToBottom(), 100);
  }
  closeChat() {
    this.selectedChat = null;
    this.selectedChatMessages = [];
  }
  sendMessage() {
    if (!this.newMessage.trim() || !this.selectedChat)
      return;
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const newMsg = {
      id: Date.now(),
      text: this.newMessage,
      senderName: `${currentUser.name || "Yo"} ${currentUser.surname || ""}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      isFromMe: true
    };
    this.selectedChatMessages.push(newMsg);
    this.newMessage = "";
    if (this.selectedChat) {
      this.selectedChat.lastMessage = newMsg.text;
      this.selectedChat.lastMessageTime = "Ahora";
    }
    setTimeout(() => this.scrollToBottom(), 100);
  }
  scrollToBottom() {
    if (this.messagesContainer) {
      const container = this.messagesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }
  }
  formatTimeAgo(createdAt) {
    const now = /* @__PURE__ */ new Date();
    const created = new Date(createdAt);
    const diffInMinutes = Math.floor((now.getTime() - created.getTime()) / (1e3 * 60));
    if (diffInMinutes < 1)
      return "Ahora";
    if (diffInMinutes < 60)
      return `${diffInMinutes}m`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24)
      return `${diffInHours}h`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1)
      return "Ayer";
    if (diffInDays < 7)
      return `${diffInDays}d`;
    return created.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short"
    });
  }
  formatMessageTime(createdAt) {
    const date = new Date(createdAt);
    return date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getMessageDate(createdAt) {
    const date = new Date(createdAt);
    const today = /* @__PURE__ */ new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (date.toDateString() === today.toDateString()) {
      return "Hoy";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Ayer";
    } else {
      return date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    }
  }
  getInitials(name, surname) {
    return (name.charAt(0) + surname.charAt(0)).toUpperCase();
  }
  getCorrectImageUrl(imagePath) {
    if (!imagePath)
      return "";
    if (imagePath.startsWith("http")) {
      return imagePath;
    }
    return `http://localhost:8080${imagePath}`;
  }
  trackByChatId(index, chat) {
    return chat.id;
  }
  static \u0275fac = function Chats_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Chats)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Chats, selectors: [["app-chats"]], viewQuery: function Chats_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messagesContainer = _t.first);
    }
  }, decls: 8, vars: 7, consts: [["messagesContainer", ""], [1, "chats-page"], [1, "chats-sidebar"], [1, "loading-container"], [1, "chats-list"], [1, "no-chats"], [1, "conversation-panel"], [1, "no-chat-selected"], [1, "loading-spinner"], [1, "chat-item", 3, "active", "unread"], [1, "chat-item", 3, "click"], [1, "chat-avatar"], [1, "avatar-image", 3, "src", "alt", "title"], [1, "avatar-initials"], [1, "online-indicator"], [1, "chat-info"], [1, "chat-header-row"], [1, "chat-name"], [1, "chat-time"], [1, "chat-preview"], [1, "last-message"], [1, "unread-badge"], [1, "material-icons"], [1, "conversation-header"], [1, "icon-btn", "back-btn", 3, "click"], [1, "conversation-user-info"], [1, "conversation-actions"], ["title", "Buscar", 1, "icon-btn"], ["title", "M\xE1s opciones", 1, "icon-btn"], [1, "messages-area"], [1, "message-date-divider"], [1, "message-bubble", 3, "sent", "received"], [1, "message-input-area"], ["title", "Adjuntar", 1, "icon-btn"], ["type", "text", "id", "message-input", "name", "newMessage", "placeholder", "Escribe un mensaje...", "autocomplete", "off", "aria-label", "Escribir mensaje", 1, "message-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["title", "Enviar", 1, "send-btn", 3, "click", "disabled"], [1, "message-bubble"], [1, "message-sender"], [1, "message-text"], [1, "message-time"]], template: function Chats_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275conditionalCreate(2, Chats_Conditional_2_Template, 4, 0, "div", 3);
      \u0275\u0275conditionalCreate(3, Chats_Conditional_3_Template, 3, 0, "div", 4);
      \u0275\u0275conditionalCreate(4, Chats_Conditional_4_Template, 7, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 6);
      \u0275\u0275conditionalCreate(6, Chats_Conditional_6_Template, 7, 0, "div", 7);
      \u0275\u0275conditionalCreate(7, Chats_Conditional_7_Template, 31, 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("chat-open", ctx.selectedChat);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading && ctx.filteredChats.length > 0 ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading && ctx.filteredChats.length === 0 ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.selectedChat ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedChat ? 7 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.chats-page[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100dvh - 140px);\n  max-height: calc(100dvh - 140px);\n  background: var(--bg);\n  overflow: hidden;\n}\n.chats-sidebar[_ngcontent-%COMP%] {\n  width: 340px;\n  min-width: 280px;\n  max-width: 100%;\n  background: var(--surface);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  background: var(--brand);\n  padding: 16px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--text-3);\n  transition: all 0.18s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--brand);\n}\n.icon-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.sidebar-header[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.sidebar-header[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n}\n.sidebar-header[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid white;\n  outline-offset: 2px;\n}\n.search-container[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: var(--surface-2);\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border);\n}\n.search-bar[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border-radius: var(--r-sm);\n  padding: 10px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid var(--border);\n  transition: all 0.18s ease;\n}\n.search-bar[_ngcontent-%COMP%]:focus-within {\n  border-color: #1b6aeb;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.1);\n}\n.search-bar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 20px;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 14px;\n  background: transparent;\n  color: #1e293b;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.chats-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n}\n.chat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 14px 20px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border-bottom: 1px solid var(--border);\n}\n.chat-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n.chat-item.active[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  border-left: 3px solid var(--brand);\n}\n.chat-item.unread[_ngcontent-%COMP%] {\n  background: rgba(27, 106, 235, 0.05);\n}\n.chat-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 14px;\n  flex-shrink: 0;\n}\n.avatar-image[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #e2e8f0;\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--brand);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 16px;\n  box-shadow: var(--shadow-xs);\n}\n.online-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  width: 12px;\n  height: 12px;\n  background: #22c55e;\n  border: 2px solid white;\n  border-radius: 50%;\n}\n.chat-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.chat-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.chat-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-1);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.chat-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-4);\n  white-space: nowrap;\n}\n.chat-item.unread[_ngcontent-%COMP%]   .chat-time[_ngcontent-%COMP%] {\n  color: var(--brand);\n  font-weight: 500;\n}\n.chat-preview[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.last-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n.chat-item.unread[_ngcontent-%COMP%]   .last-message[_ngcontent-%COMP%] {\n  color: var(--text-1);\n  font-weight: 500;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  background: var(--brand);\n  color: white;\n  border-radius: var(--r-pill);\n  min-width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 10px;\n  padding: 0 6px;\n}\n.conversation-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg);\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n}\n.no-chat-selected[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-3);\n  position: relative;\n  z-index: 1;\n}\n.no-chat-selected[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 80px;\n  margin-bottom: 20px;\n  color: var(--brand);\n  opacity: 0.6;\n}\n.no-chat-selected[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 24px;\n  font-weight: 500;\n  color: var(--text-1);\n}\n.no-chat-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  text-align: center;\n  color: var(--text-3);\n}\n.conversation-header[_ngcontent-%COMP%] {\n  background: var(--surface);\n  padding: 12px 20px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n  z-index: 1;\n  flex-shrink: 0;\n  box-shadow: var(--shadow-xs);\n}\n.conversation-header[_ngcontent-%COMP%]   .chat-avatar[_ngcontent-%COMP%] {\n  margin-right: 14px;\n}\n.conversation-header[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%], \n.conversation-header[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  font-size: 15px;\n}\n.conversation-user-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.conversation-user-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.conversation-user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--success);\n  font-weight: 500;\n}\n.conversation-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.messages-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  position: relative;\n  z-index: 1;\n  min-height: 0;\n  background: var(--surface-2);\n}\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 75%;\n  padding: 12px 16px;\n  border-radius: var(--r-md);\n  position: relative;\n  word-wrap: break-word;\n  box-shadow: var(--shadow-xs);\n}\n.message-bubble.received[_ngcontent-%COMP%] {\n  background: var(--surface);\n  align-self: flex-start;\n  border-bottom-left-radius: 4px;\n  border: 1px solid var(--border);\n}\n.message-bubble.sent[_ngcontent-%COMP%] {\n  background: var(--brand);\n  align-self: flex-end;\n  border-bottom-right-radius: 4px;\n  color: white;\n}\n.message-sender[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--brand);\n  margin-bottom: 4px;\n}\n.message-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.5;\n  margin: 0;\n}\n.message-bubble.received[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n.message-bubble.sent[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-align: right;\n  margin-top: 6px;\n}\n.message-bubble.received[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: var(--text-4);\n}\n.message-bubble.sent[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.message-date-divider[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px 0;\n}\n.message-date-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--surface);\n  padding: 8px 16px;\n  border-radius: var(--r-pill);\n  font-size: 12px;\n  color: var(--text-3);\n  font-weight: 500;\n  box-shadow: var(--shadow-xs);\n  border: 1px solid var(--border);\n}\n.message-input-area[_ngcontent-%COMP%] {\n  background: var(--surface);\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n  z-index: 1;\n  flex-shrink: 0;\n  border-top: 1px solid var(--border);\n  box-shadow: var(--shadow-xs);\n}\n.message-input-area[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n.message-input-area[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.message-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-pill);\n  padding: 12px 20px;\n  font-size: 14px;\n  outline: none;\n  resize: none;\n  max-height: 100px;\n  transition: all 0.18s ease;\n}\n.message-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.message-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-4);\n}\n.send-btn[_ngcontent-%COMP%] {\n  background: var(--brand);\n  border: none;\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: white;\n  transition: all 0.18s ease;\n  box-shadow: var(--shadow-xs);\n}\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.send-btn[_ngcontent-%COMP%]:disabled {\n  background: var(--border-strong);\n  cursor: not-allowed;\n  box-shadow: none;\n  transform: none;\n}\n.send-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: var(--text-3);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--border);\n  border-top-color: var(--brand);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 12px;\n}\n.no-chats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: var(--text-3);\n  text-align: center;\n}\n.no-chats[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 16px;\n  color: var(--brand);\n  opacity: 0.5;\n}\n.no-chats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.no-chats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-3);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #1b6aeb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 12px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.no-chats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: #64748b;\n  text-align: center;\n}\n.no-chats[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 16px;\n  color: #1b6aeb;\n  opacity: 0.5;\n}\n.no-chats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.no-chats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #64748b;\n}\n.chats-list[_ngcontent-%COMP%]::-webkit-scrollbar, \n.messages-area[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.chats-list[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.messages-area[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chats-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.messages-area[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border-strong);\n  border-radius: 3px;\n}\n.chats-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.messages-area[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-4);\n}\n@media (max-width: 900px) {\n  .chats-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n    min-width: 0;\n  }\n  .conversation-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .chats-page.chat-open[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .chats-page.chat-open[_ngcontent-%COMP%]   .conversation-panel[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .back-btn[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n@media (max-width: 480px) {\n  .chats-page[_ngcontent-%COMP%] {\n    height: calc(100dvh - 120px);\n    max-height: calc(100dvh - 120px);\n  }\n  .sidebar-header[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n  }\n  .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .message-input-area[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .conversation-header[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n  }\n  .messages-area[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .message-bubble[_ngcontent-%COMP%] {\n    max-width: 85%;\n  }\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: none;\n  margin-right: 8px;\n}\n[data-theme="dark"][_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, [data-theme="dark"]   [_nghost-%COMP%]   .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-4);\n}\n[data-theme="dark"][_nghost-%COMP%]   .no-chats[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .no-chats[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n[data-theme="dark"][_nghost-%COMP%]   .no-chats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .no-chats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-1);\n}\n[data-theme="dark"][_nghost-%COMP%]   .no-chats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], [data-theme="dark"]   [_nghost-%COMP%]   .no-chats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-3);\n}\n/*# sourceMappingURL=chats.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chats, [{
    type: Component,
    args: [{ selector: "app-chats", standalone: true, imports: [FormsModule], template: `<div class="chats-page" [class.chat-open]="selectedChat">
  <!-- Left Panel - Chat List -->
  <div class="chats-sidebar">

    <!-- Loading State -->
    @if (isLoading) {
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <p>Cargando chats...</p>
      </div>
    }

    <!-- Chat List -->
    @if (!isLoading && filteredChats.length > 0) {
      <div class="chats-list">
        @for (chat of filteredChats; track trackByChatId($index, chat)) {
          <div
            class="chat-item"
            [class.active]="selectedChat?.id === chat.id"
            [class.unread]="chat.unreadCount > 0"
            (click)="selectChat(chat)">
            <div class="chat-avatar">
              @if (chat.profilePicture) {
                <img
                  [src]="getCorrectImageUrl(chat.profilePicture)"
                  [alt]="chat.name + ' ' + chat.surname"
                  [title]="chat.name + ' ' + chat.surname"
                  class="avatar-image"
                  />
              } @else {
                <div class="avatar-initials">
                  {{ getInitials(chat.name, chat.surname) }}
                </div>
              }
              @if (chat.isOnline) {
                <div class="online-indicator"></div>
              }
            </div>
            <div class="chat-info">
              <div class="chat-header-row">
                <h3 class="chat-name">{{ chat.name }} {{ chat.surname }}</h3>
                <span class="chat-time">{{ chat.lastMessageTime }}</span>
              </div>
              <div class="chat-preview">
                <p class="last-message">{{ chat.lastMessage }}</p>
                @if (chat.unreadCount > 0) {
                  <span class="unread-badge">
                    {{ chat.unreadCount > 99 ? '99+' : chat.unreadCount }}
                  </span>
                }
              </div>
            </div>
          </div>
        }
      </div>
    }

    <!-- Empty State -->
    @if (!isLoading && filteredChats.length === 0) {
      <div class="no-chats">
        <span class="material-icons">chat_bubble_outline</span>
        <h4>No hay conversaciones</h4>
        <p>Las notificaciones aparecer\xE1n aqu\xED como chats</p>
      </div>
    }
  </div>

  <!-- Right Panel - Conversation -->
  <div class="conversation-panel">
    <!-- No Chat Selected -->
    @if (!selectedChat) {
      <div class="no-chat-selected">
        <span class="material-icons">forum</span>
        <h3>Notas Trinitario Chat</h3>
        <p>Selecciona una conversaci\xF3n para ver los mensajes</p>
      </div>
    }

    <!-- Chat Selected -->
    @if (selectedChat) {
      <!-- Conversation Header -->
      <div class="conversation-header">
        <button class="icon-btn back-btn" (click)="closeChat()">
          <span class="material-icons">arrow_back</span>
        </button>
        <div class="chat-avatar">
          @if (selectedChat.profilePicture) {
            <img
              [src]="getCorrectImageUrl(selectedChat.profilePicture)"
              [alt]="selectedChat.name"
              [title]="selectedChat.name + ' ' + selectedChat.surname"
              class="avatar-image"
            />
          }
        </div>
        <div class="conversation-user-info">
          <h3>{{ selectedChat.name }} {{ selectedChat.surname }}</h3>
          @if (selectedChat.isOnline) {
            <p>En l\xEDnea</p>
          }
        </div>
        <div class="conversation-actions">
          <button class="icon-btn" title="Buscar">
            <span class="material-icons">search</span>
          </button>
          <button class="icon-btn" title="M\xE1s opciones">
            <span class="material-icons">more_vert</span>
          </button>
        </div>
      </div>
      <!-- Messages Area -->
      <div class="messages-area" #messagesContainer>
        @if (selectedChatMessages.length > 0) {
          <div class="message-date-divider">
            <span>{{ getMessageDate(selectedChatMessages[0].createdAt) }}</span>
          </div>
        }
        @for (message of selectedChatMessages; track message) {
          <div
            class="message-bubble"
            [class.sent]="message.isFromMe"
            [class.received]="!message.isFromMe">
            @if (!message.isFromMe) {
              <div class="message-sender">
                {{ message.senderName }}
              </div>
            }
            <p class="message-text">{{ message.text }}</p>
            <div class="message-time">{{ formatMessageTime(message.createdAt) }}</div>
          </div>
        }
        @if (selectedChatMessages.length === 0) {
          <div class="no-chats">
            <span class="material-icons">chat</span>
            <h4>Inicia la conversaci\xF3n</h4>
            <p>Env\xEDa un mensaje para comenzar</p>
          </div>
        }
      </div>
      <!-- Message Input -->
      <div class="message-input-area">
        <button class="icon-btn" title="Adjuntar">
          <span class="material-icons">attach_file</span>
        </button>
        <input
          type="text"
          class="message-input"
          id="message-input"
          name="newMessage"
          placeholder="Escribe un mensaje..."
          autocomplete="off"
          [(ngModel)]="newMessage"
          (keyup.enter)="sendMessage()"
          aria-label="Escribir mensaje"
        />
          <button
            class="send-btn"
            [disabled]="!newMessage.trim()"
            (click)="sendMessage()"
            title="Enviar">
            <span class="material-icons">send</span>
          </button>
        </div>
      }
    </div>
  </div>
`, styles: ['/* src/app/chats/chats.css */\n.chats-page {\n  display: flex;\n  height: calc(100dvh - 140px);\n  max-height: calc(100dvh - 140px);\n  background: var(--bg);\n  overflow: hidden;\n}\n.chats-sidebar {\n  width: 340px;\n  min-width: 280px;\n  max-width: 100%;\n  background: var(--surface);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.sidebar-header {\n  background: var(--brand);\n  padding: 16px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.sidebar-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sidebar-header h2 .material-icons {\n  color: white;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n}\n.icon-btn {\n  background: none;\n  border: none;\n  padding: 8px;\n  border-radius: 50%;\n  cursor: pointer;\n  color: var(--text-3);\n  transition: all 0.18s ease;\n}\n.icon-btn:hover {\n  background: var(--surface-2);\n  color: var(--brand);\n}\n.icon-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.sidebar-header .icon-btn {\n  color: rgba(255, 255, 255, 0.8);\n}\n.sidebar-header .icon-btn:hover {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n}\n.sidebar-header .icon-btn:focus-visible {\n  outline: 2px solid white;\n  outline-offset: 2px;\n}\n.search-container {\n  padding: 12px 16px;\n  background: var(--surface-2);\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border);\n}\n.search-bar {\n  background: var(--surface);\n  border-radius: var(--r-sm);\n  padding: 10px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid var(--border);\n  transition: all 0.18s ease;\n}\n.search-bar:focus-within {\n  border-color: #1b6aeb;\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.1);\n}\n.search-bar .material-icons {\n  color: #64748b;\n  font-size: 20px;\n}\n.search-bar input {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 14px;\n  background: transparent;\n  color: #1e293b;\n}\n.search-bar input::placeholder {\n  color: #94a3b8;\n}\n.chats-list {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n}\n.chat-item {\n  display: flex;\n  align-items: center;\n  padding: 14px 20px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border-bottom: 1px solid var(--border);\n}\n.chat-item:hover {\n  background: var(--surface-2);\n}\n.chat-item.active {\n  background: var(--brand-50);\n  border-left: 3px solid var(--brand);\n}\n.chat-item.unread {\n  background: rgba(27, 106, 235, 0.05);\n}\n.chat-avatar {\n  position: relative;\n  margin-right: 14px;\n  flex-shrink: 0;\n}\n.avatar-image {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #e2e8f0;\n}\n.avatar-initials {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--brand);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 16px;\n  box-shadow: var(--shadow-xs);\n}\n.online-indicator {\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  width: 12px;\n  height: 12px;\n  background: #22c55e;\n  border: 2px solid white;\n  border-radius: 50%;\n}\n.chat-info {\n  flex: 1;\n  min-width: 0;\n}\n.chat-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.chat-name {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-1);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.chat-time {\n  font-size: 12px;\n  color: var(--text-4);\n  white-space: nowrap;\n}\n.chat-item.unread .chat-time {\n  color: var(--brand);\n  font-weight: 500;\n}\n.chat-preview {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.last-message {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1;\n}\n.chat-item.unread .last-message {\n  color: var(--text-1);\n  font-weight: 500;\n}\n.unread-badge {\n  background: var(--brand);\n  color: white;\n  border-radius: var(--r-pill);\n  min-width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: 10px;\n  padding: 0 6px;\n}\n.conversation-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg);\n  position: relative;\n  height: 100%;\n  overflow: hidden;\n}\n.no-chat-selected {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-3);\n  position: relative;\n  z-index: 1;\n}\n.no-chat-selected .material-icons {\n  font-size: 80px;\n  margin-bottom: 20px;\n  color: var(--brand);\n  opacity: 0.6;\n}\n.no-chat-selected h3 {\n  margin: 0 0 8px 0;\n  font-size: 24px;\n  font-weight: 500;\n  color: var(--text-1);\n}\n.no-chat-selected p {\n  margin: 0;\n  font-size: 14px;\n  text-align: center;\n  color: var(--text-3);\n}\n.conversation-header {\n  background: var(--surface);\n  padding: 12px 20px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  position: relative;\n  z-index: 1;\n  flex-shrink: 0;\n  box-shadow: var(--shadow-xs);\n}\n.conversation-header .chat-avatar {\n  margin-right: 14px;\n}\n.conversation-header .avatar-image,\n.conversation-header .avatar-initials {\n  width: 44px;\n  height: 44px;\n  font-size: 15px;\n}\n.conversation-user-info {\n  flex: 1;\n}\n.conversation-user-info h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.conversation-user-info p {\n  margin: 0;\n  font-size: 13px;\n  color: var(--success);\n  font-weight: 500;\n}\n.conversation-actions {\n  display: flex;\n  gap: 8px;\n}\n.messages-area {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  position: relative;\n  z-index: 1;\n  min-height: 0;\n  background: var(--surface-2);\n}\n.message-bubble {\n  max-width: 75%;\n  padding: 12px 16px;\n  border-radius: var(--r-md);\n  position: relative;\n  word-wrap: break-word;\n  box-shadow: var(--shadow-xs);\n}\n.message-bubble.received {\n  background: var(--surface);\n  align-self: flex-start;\n  border-bottom-left-radius: 4px;\n  border: 1px solid var(--border);\n}\n.message-bubble.sent {\n  background: var(--brand);\n  align-self: flex-end;\n  border-bottom-right-radius: 4px;\n  color: white;\n}\n.message-sender {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--brand);\n  margin-bottom: 4px;\n}\n.message-text {\n  font-size: 14px;\n  line-height: 1.5;\n  margin: 0;\n}\n.message-bubble.received .message-text {\n  color: var(--text-1);\n}\n.message-bubble.sent .message-text {\n  color: white;\n}\n.message-time {\n  font-size: 11px;\n  text-align: right;\n  margin-top: 6px;\n}\n.message-bubble.received .message-time {\n  color: var(--text-4);\n}\n.message-bubble.sent .message-time {\n  color: rgba(255, 255, 255, 0.8);\n}\n.message-date-divider {\n  text-align: center;\n  margin: 20px 0;\n}\n.message-date-divider span {\n  background: var(--surface);\n  padding: 8px 16px;\n  border-radius: var(--r-pill);\n  font-size: 12px;\n  color: var(--text-3);\n  font-weight: 500;\n  box-shadow: var(--shadow-xs);\n  border: 1px solid var(--border);\n}\n.message-input-area {\n  background: var(--surface);\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n  z-index: 1;\n  flex-shrink: 0;\n  border-top: 1px solid var(--border);\n  box-shadow: var(--shadow-xs);\n}\n.message-input-area .icon-btn {\n  color: var(--text-3);\n}\n.message-input-area .icon-btn:hover {\n  color: var(--brand);\n  background: var(--brand-50);\n}\n.message-input {\n  flex: 1;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--r-pill);\n  padding: 12px 20px;\n  font-size: 14px;\n  outline: none;\n  resize: none;\n  max-height: 100px;\n  transition: all 0.18s ease;\n}\n.message-input:focus {\n  border-color: var(--brand);\n  box-shadow: 0 0 0 3px rgba(27, 106, 235, 0.15);\n}\n.message-input::placeholder {\n  color: var(--text-4);\n}\n.send-btn {\n  background: var(--brand);\n  border: none;\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: white;\n  transition: all 0.18s ease;\n  box-shadow: var(--shadow-xs);\n}\n.send-btn:hover:not(:disabled) {\n  background: var(--brand-600);\n  box-shadow: var(--shadow-sm);\n}\n.send-btn:disabled {\n  background: var(--border-strong);\n  cursor: not-allowed;\n  box-shadow: none;\n  transform: none;\n}\n.send-btn:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: var(--text-3);\n}\n.loading-spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--border);\n  border-top-color: var(--brand);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 12px;\n}\n.no-chats {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: var(--text-3);\n  text-align: center;\n}\n.no-chats .material-icons {\n  font-size: 56px;\n  margin-bottom: 16px;\n  color: var(--brand);\n  opacity: 0.5;\n}\n.no-chats h4 {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-1);\n}\n.no-chats p {\n  margin: 0;\n  font-size: 14px;\n  color: var(--text-3);\n}\n.loading-spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #1b6aeb;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 12px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.no-chats {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: #64748b;\n  text-align: center;\n}\n.no-chats .material-icons {\n  font-size: 56px;\n  margin-bottom: 16px;\n  color: #1b6aeb;\n  opacity: 0.5;\n}\n.no-chats h4 {\n  margin: 0 0 8px 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.no-chats p {\n  margin: 0;\n  font-size: 14px;\n  color: #64748b;\n}\n.chats-list::-webkit-scrollbar,\n.messages-area::-webkit-scrollbar {\n  width: 6px;\n}\n.chats-list::-webkit-scrollbar-track,\n.messages-area::-webkit-scrollbar-track {\n  background: transparent;\n}\n.chats-list::-webkit-scrollbar-thumb,\n.messages-area::-webkit-scrollbar-thumb {\n  background: var(--border-strong);\n  border-radius: 3px;\n}\n.chats-list::-webkit-scrollbar-thumb:hover,\n.messages-area::-webkit-scrollbar-thumb:hover {\n  background: var(--text-4);\n}\n@media (max-width: 900px) {\n  .chats-sidebar {\n    width: 100%;\n    max-width: none;\n    min-width: 0;\n  }\n  .conversation-panel {\n    display: none;\n  }\n  .chats-page.chat-open .chats-sidebar {\n    display: none;\n  }\n  .chats-page.chat-open .conversation-panel {\n    display: flex;\n  }\n  .back-btn {\n    display: flex !important;\n  }\n}\n@media (max-width: 480px) {\n  .chats-page {\n    height: calc(100dvh - 120px);\n    max-height: calc(100dvh - 120px);\n  }\n  .sidebar-header {\n    padding: 14px 16px;\n  }\n  .sidebar-header h2 {\n    font-size: 18px;\n  }\n  .message-input-area {\n    padding: 12px 16px;\n  }\n  .conversation-header {\n    padding: 10px 16px;\n  }\n  .messages-area {\n    padding: 16px;\n  }\n  .message-bubble {\n    max-width: 85%;\n  }\n}\n.back-btn {\n  display: none;\n  margin-right: 8px;\n}\n:host-context([data-theme="dark"]) .search-bar .material-icons {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .search-bar input {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .search-bar input::placeholder {\n  color: var(--text-4);\n}\n:host-context([data-theme="dark"]) .no-chats {\n  color: var(--text-3);\n}\n:host-context([data-theme="dark"]) .no-chats h4 {\n  color: var(--text-1);\n}\n:host-context([data-theme="dark"]) .no-chats p {\n  color: var(--text-3);\n}\n/*# sourceMappingURL=chats.css.map */\n'] }]
  }], null, { messagesContainer: [{
    type: ViewChild,
    args: ["messagesContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Chats, { className: "Chats", filePath: "app/chats/chats.ts", lineNumber: 33 });
})();
export {
  Chats
};
//# sourceMappingURL=chunk-JJC7JJTD.js.map
