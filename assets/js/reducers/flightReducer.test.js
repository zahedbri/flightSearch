import flightReducer from './flightReducer';
import {
	ADD_FLIGHT,
	DELETE_FLIGHT,
	UPDATE_FLIGHT,
	FETCH_FLIGHTS,
	SELECT_FLIGHT
} from '../actions/types.js';

let values = {
	classType: 'business',
	departure: 'downey',
	departureTime: 123456789,
	arrival: 'irvine',
	arrivalTime: 123456789
};
let id =
	values.classType +
	values.departure +
	values.departureTime +
	values.arrival +
	values.arrivalTime;

let initialState = {
	flights: {},
	selectedFlight: {}
};

describe('Flight reducer', () => {
	it('Should return default state', () => {
		const newState = flightReducer(undefined, initialState);
		expect(newState).toEqual(initialState);
	});

	it('Add Flight', () => {
		const newState = flightReducer(initialState, {
			type: ADD_FLIGHT,
			payload: values,
			id: id
		});
		expect(newState).toEqual({
			flights: {
				[id]: values
			},
			selectedFlight: {}
		});
	});

	it('Delete Flight', () => {
		let initialState = {
			flights: {
				[id]: values,
				112233: values
			},
			selectedFlight: {}
		};

		const newState = flightReducer(initialState, {
			type: DELETE_FLIGHT,
			payload: id
		});
		expect(newState).toEqual({
			flights: {
				112233: values
			},
			selectedFlight: {}
		});
	});

	it('Select Flight', () => {
		let initialSelectState = {
			flights: {
				[id]: values
			},
			selectedFlight: {}
		};
		const newState = flightReducer(initialSelectState, {
			type: SELECT_FLIGHT,
			payload: values
		});
		expect(newState).toEqual({
			flights: {
				[id]: values
			},
			selectedFlight: {
				...values
			}
		});
	});
});
