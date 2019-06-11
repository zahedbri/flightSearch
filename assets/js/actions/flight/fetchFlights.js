import axios from 'axios';
import _ from 'lodash';
import {
	IS_FETCHING_REQUEST,
	IS_FETCHING_COMPLETE,
	FETCH_FLIGHTS
} from '../types';

export const fetchFlights = () => async dispatch => {
	dispatch({ type: IS_FETCHING_REQUEST });
	let allData;
	let business = Promise.resolve(
		axios.get('https://tokigames-challenge.herokuapp.com/api/flights/business')
	);
	let cheap = Promise.resolve(
		axios.get('https://tokigames-challenge.herokuapp.com/api/flights/cheap')
	);
	Promise.all([business, cheap])
		.then(resultsArr => {
			let businessData = resultsArr[0].data.data.map(item => {
				return {
					classType: 'business',
					departure: item.departure.toLowerCase(),
					arrival: item.arrival.toLowerCase(),
					departureTime: item.departureTime,
					arrivalTime: item.arrivalTime
				};
			});
			let cheapData = resultsArr[1].data.data.map(item => {
				let route = item.route.split('-');
				let departure = route[0];
				let arrival = route[1];
				return {
					classType: 'cheap',
					departure: departure.toLowerCase(),
					arrival: arrival.toLowerCase(),
					departureTime: item.departure,
					arrivalTime: item.arrival
				};
			});

			allData = _.mapKeys([...businessData, ...cheapData], function(
				value,
				key,
				object
			) {
				return (
					object[key]['classType'] +
					object[key]['departure'] +
					object[key]['departureTime'] +
					object[key]['arrival'] +
					object[key]['arrivalTime']
				);
			});

			let displayFlights = _.mapKeys(allData => {
				return value;
			});

			let displayFlights2 = _.map(allData, (value, index, items) => {
				return value;
			});
		})
		.then(() =>
			dispatch({
				type: FETCH_FLIGHTS,
				payload: allData
			})
		)
		.then(() => dispatch({ type: IS_FETCHING_COMPLETE }));
};
