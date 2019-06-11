import { SELECT_FLIGHT } from '../types.js';

export const selectFlight = flight => dispatch => {
	dispatch({
		type: SELECT_FLIGHT,
		payload: flight
	});
};
