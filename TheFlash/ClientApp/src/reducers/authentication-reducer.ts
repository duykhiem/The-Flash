import * as Actions from '../actions/authentication-action';
import { AuthenticationState, InitialState } from '../state';

export default function authenticationReducer(
    state: AuthenticationState = InitialState.authentication,
    action: Actions.ActionTypes) {
        
    switch (action.type) {

        case Actions.LOGIN:
            return {
                ...state,
                userId: action.userId
            };

        case Actions.LOGOUT:
            return {
                ...state,
                userId: ''
            };

        default:
            return state;
    }
}