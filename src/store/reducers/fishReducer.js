import { FISH } from '../actions/fishActions';

const initialState = {
	fish: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FISH:
			return {
				...state,
				fish: action.payload + '??/??',
			};
		default:
			return state;
	}
};
