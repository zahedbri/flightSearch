import { DELETE_FLIGHT } from '../types.js';

export const deleteFlight = id => dispatch => {
	dispatch({
		type: DELETE_FLIGHT,
		payload: id
	});
	return Promise.resolve();
};
