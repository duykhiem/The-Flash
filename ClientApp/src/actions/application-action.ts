import UserModel from '../models/user-model';
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

export const SET_INPUT_USER = 'SET_INPUT_USER';
export type SET_INPUT_USER = typeof SET_INPUT_USER;

export interface SetInputUser {
    type: SET_INPUT_USER;
    value: UserModel; 
}

export function setInputUser(user: UserModel): SetInputUser {
    return {
        type: SET_INPUT_USER,
        value: user
    };
}

export type ActionTypes = ShowNotification | HideNotification | SetInputUser;