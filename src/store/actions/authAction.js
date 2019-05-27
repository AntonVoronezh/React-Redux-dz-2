import { setInStorage, removeInStorage } from '../../helpers/localStorage/localStorage';
import axios from '../../helpers/axios/instanse';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const LOGOUT = 'LOGOUT';

const authRequestAC = () => ({ type: AUTH_REQUEST });
const authSuccessAC = () => ({ type: AUTH_SUCCESS });
const authFailureAC = err => ({ type: AUTH_FAILURE, payload: err });

const logoutAC = () => ({ type: LOGOUT });

export const auth = ({ email, password }) => {
	return async dispatch => {
		dispatch(authRequestAC());

		try {
			const response = await axios.post('/validate', { email, password });
			console.log('response', response.data);

			setInStorage('isLogged', true);

			dispatch(authSuccessAC());
		} catch (error) {
			dispatch(authFailureAC(error));
		}
	};
};

export const logout = () => {
	return dispatch => {
		removeInStorage('isLogged');

		dispatch(logoutAC());
	};
};
