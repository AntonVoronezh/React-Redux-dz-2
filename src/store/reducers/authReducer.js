import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, LOGOUT } from '../actions/authAction';

const initialState = {
	isRequest: false,
	errorMessage: null,
	isAuth: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTH_REQUEST: {
			return {
				...state,
				isRequest: true,
			};
		}
		case AUTH_SUCCESS: {
			return {
				...state,
				isRequest: false,
				isAuth: true,
			};
		}
		case AUTH_FAILURE: {
			return {
				...state,
				errorMessage: action.payload,
				isRequest: false,
			};
		}
		case LOGOUT: {
			return {
				...state,
				isAuth: false,
			};
		}

		default:
			return state;
	}
};
