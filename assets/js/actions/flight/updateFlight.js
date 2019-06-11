import { UPDATE_FLIGHT } from '../types.js';

export const updateFlight = (values, currentId, uniqueKey) => dispatch => {
	dispatch({
		type: UPDATE_FLIGHT,
		payload: values,
		currentId: currentId,
		newId: uniqueKey
	});
	return Promise.resolve();
};
