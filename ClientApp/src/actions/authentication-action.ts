import UserData from '../interfaces/user';

export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export type SET_LOGGED_IN_USER = typeof SET_LOGGED_IN_USER;

export interface SetLoggedInUser {
  type: SET_LOGGED_IN_USER;
  user: UserData;
}

export function setLoggedInUser(user: UserData): SetLoggedInUser {
  return {
    type: SET_LOGGED_IN_USER,
    user: user
  };
}

export const LOGOUT = 'LOGOUT';
export type LOGOUT = typeof LOGOUT;

export interface Logout {
  type: LOGOUT;
}

export function logOut(): Logout {
  return {
    type: LOGOUT
  };
}

export type ActionTypes = SetLoggedInUser | Logout;