import UserModel from '../models/user-model';
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
    inputUser: UserModel;
}

export interface AuthenticationState {
    currentUser: UserModel;
}

export interface UserInputState {
    user: UserModel;
}

export const InitialState: StoreState = {
    application: {
        history: [],
        notification: {
            showNotification: false,
            notificationType: NotificationType.Success,
            message: ''
        },
        inputUser: {
            Id: '',
            Username: '',
            Password: '',
            FirstName: '',
            LastName: '',
            Token: '',
            RememberMe: false
        }
    },
    authentication: {
        currentUser: null
    }
};
