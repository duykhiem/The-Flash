import UserModel from '../models/user-model';
import NotificationType from '../utils/notification-type';
import ProductModel from '../models/product-model';

export interface StoreState {
    application: ApplicationState;
    authentication: AuthenticationState;
    cart: {
        items: Array<ProductModel>
    };
    product: {
        items: Array<ProductModel>
    };
}

export interface ApplicationState {
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
    },
    cart: {
        items: []
    },
    product: {
        items: []
    }
};
