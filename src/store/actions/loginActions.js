export const TRY_LOGIN = 'TRY_LOGIN';
export const LOGOUT = 'LOGOUT';

export const tryLoginAC = user => ({ type: TRY_LOGIN, payload: user });
export const logoutAC = () => ({ type: LOGOUT});
