import * as Actions from '../actions/application-action';
import { ApplicationState, InitialState } from '../state';

export default function applicationReducer(
    state: ApplicationState  = InitialState.application, 
    action: Actions.ActionTypes) {
    switch (action.type) {
        case Actions.SHOW_NOTIFICATION:
            return { 
                ...state,
                notification: {
                    showNotification: true,
                    notificationType: action.notificationType,
                    message: action.message
                }
            };
        case Actions.HIDE_NOTIFICATION:
            return { 
                ...state,
                notification: InitialState.application.notification
            };
        default:
            return state;
    }
}