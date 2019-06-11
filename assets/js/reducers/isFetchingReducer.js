import { IS_FETCHING_REQUEST, IS_FETCHING_COMPLETE } from '../actions/types.js';
const initialState = {
	isFetching: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case IS_FETCHING_REQUEST:
			return true;
		case IS_FETCHING_COMPLETE:
			return false;
		default:
			return state;
	}
}
