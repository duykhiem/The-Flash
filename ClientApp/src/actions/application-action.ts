import NotificationType from '../utils/notification-type';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export type SHOW_NOTIFICATION = typeof SHOW_NOTIFICATION;

export interface ShowNotification {
    type: SHOW_NOTIFICATION;
    notificationType: NotificationType;
    message: string;
}

export function showNotification(notificationType: NotificationType, message: string): ShowNotification {
    return {
        type: SHOW_NOTIFICATION,
        notificationType: notificationType,
        message: message
    };
}

export const HIDE_NOTIFICATION = 'CLOSE_NOTIFICATION';
export type HIDE_NOTIFICATION = typeof HIDE_NOTIFICATION;

export interface HideNotification {
    type: HIDE_NOTIFICATION;
}

export function hideNotification(): HideNotification {
    return {
        type: HIDE_NOTIFICATION
    };
}

export type ActionTypes = ShowNotification | HideNotification;