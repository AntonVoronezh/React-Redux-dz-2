import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from '../actions/newsActions';

const initialState = {
	isLoading: false,
	news: [],
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case NEWS_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case NEWS_SUCCESS:
			return {
				...state,
				isLoading: false,
				news: action.payload,
			};
		case NEWS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return state;
	}
};
