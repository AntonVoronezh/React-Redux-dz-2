export const USERNAME_TEXT = 'USERNAME_TEXT';
export const PASSWORD_TEXT = 'PASSWORD_TEXT';
export const USERNAME_BACKSPACE = 'USERNAME_BACKSPACE';
export const PASSWORD_BACKSPACE = 'PASSWORD_BACKSPACE';

export const usernameTextAC = text => ({ type: USERNAME_TEXT, payload: text });
export const passwordTextAC = text => ({ type: PASSWORD_TEXT, payload: text });
export const usernameBackspaceAC = () => ({ type: USERNAME_BACKSPACE });
export const passwordBackspaceAC = () => ({ type: PASSWORD_BACKSPACE });
