import NotificationType from '../utils/notification-type';

export interface StoreState {
    application: ApplicationState;
    authentication: AuthenticationState;
}

export interface ApplicationState {
    history: Array<string>;
    notification: {
        showNotification: boolean;
        notificationType: NotificationType;
        message: string
    };
}

export interface AuthenticationState {
    userId: string;
}

export const InitialState: StoreState = {
    application: {
        history: [],
        notification: {
            showNotification: false,
            notificationType: NotificationType.Success,
            message: ''
        }
    },
    authentication: {
        userId: ''
    }
};
