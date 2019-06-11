import _ from 'lodash';
import {
	ADD_FLIGHT,
	DELETE_FLIGHT,
	UPDATE_FLIGHT,
	FETCH_FLIGHTS,
	SELECT_FLIGHT
} from '../actions/types.js';
const initialState = {
	flights: {},
	selectedFlight: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_FLIGHTS:
			return {
				...state,
				flights: action.payload
			};
		case SELECT_FLIGHT:
			return { ...state, selectedFlight: action.payload };
		case ADD_FLIGHT:
			return {
				...state,
				flights: {
					...{ [action.id]: action.payload },
					...state.flights
				}
			};
		case UPDATE_FLIGHT:
			let newOb = { [action.newId]: action.payload };
			let filteredFlights = _.omit(state.flights, action.currentId);
			return {
				...state,
				flights: { ...newOb, ...filteredFlights }
			};
			break;
		case DELETE_FLIGHT:
			return {
				...state,
				flights: _.omit(state.flights, action.payload)
			};

			break;

		default:
			return state;
	}
}
