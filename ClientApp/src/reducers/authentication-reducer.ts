import * as Actions from '../actions/authentication-action';
import { AuthenticationState, InitialState } from '../state';

export default function authenticationReducer(
    state: AuthenticationState = InitialState.authentication,
    action: Actions.ActionTypes) {
        
    switch (action.type) {

        case Actions.SET_LOGGED_IN_USER:
            return {
                ...state,
                currentUser: action.user
            };

        case Actions.LOGOUT:
            return {
                ...state,
                currentUser: null
            };

        default:
            return state;
    }
}