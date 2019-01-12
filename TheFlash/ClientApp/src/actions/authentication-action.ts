export const LOGIN = 'LOGIN';
export type LOGIN = typeof LOGIN;

export interface Login {
  type: LOGIN;
  userId: string;
}

export function login(userId: string): Login {
  return {
    type: LOGIN,
    userId: userId
  };
}

export const LOGOUT = 'LOGOUT';
export type LOGOUT = typeof LOGOUT;

export interface Logout {
  type: LOGOUT;
}

export function logout(): Logout {
  return {
    type: LOGOUT
  };
}

export type ActionTypes = Login | Logout;