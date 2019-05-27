import { tryLogin } from '../axios/axios';

export const login = controls => {
	// const { login, password } = controls;
	const loginFetch = tryLogin(controls);

};
