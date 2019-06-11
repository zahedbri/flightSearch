import { ADD_FLIGHT } from '../types.js';

export const addFlight = values => dispatch => {
	dispatch({
		type: ADD_FLIGHT,
		payload: values,
		id:
			values.classType +
			values.departure +
			values.departureTime +
			values.arrival +
			values.arrivalTime
	});
	return Promise.resolve();
};
