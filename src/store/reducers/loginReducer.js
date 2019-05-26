import { login } from '../../helpers/login/login';
import { setInStorage, getInStorage } from '../../helpers/localStorage/localStorage';

import { TRY_LOGIN, LOGOUT } from '../actions/loginActions';

const initialState = {
	isLogged: getInStorage('isLogged') || false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TRY_LOGIN: {
			const loginFlag = login({
				login: action.payload.login,
				password: action.payload.password,
			});

			setInStorage('isLogged', loginFlag);

			return loginFlag ? {
				isLogged: getInStorage('isLogged'),
			} : {
				isLogged: getInStorage('isLogged'),
				error: true
			}
		}

		case LOGOUT: {
			setInStorage('isLogged', false);

			return {
				...state,
				isLogged: getInStorage('isLogged'),
			};
		}

		default:
			return state;
	}
};
