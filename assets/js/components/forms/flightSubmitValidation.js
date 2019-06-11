import moment from 'moment';
const flightSubmitValidation = ({
	classType,
	departure,
	departureTime,
	arrival,
	arrivalTime
}) => {
	let newValues = {
		arrival: arrival.trim().toLowerCase(),
		arrivalTime: parseInt(
			moment(arrivalTime._d)
				.valueOf()
				.toString()
				.slice(0, 10)
		),
		classType: classType.value,
		departure: departure.trim().toLowerCase(),
		departureTime: parseInt(
			moment(departureTime._d)
				.valueOf()
				.toString()
				.slice(0, 10)
		)
	};
	return newValues;
};

export { flightSubmitValidation };
