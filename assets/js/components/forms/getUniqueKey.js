const getUniqueKey = values => {
	let uniqueKey =
		values.classType +
		values.departure +
		values.departureTime +
		values.arrival +
		values.arrivalTime;
	return uniqueKey;
};

export { getUniqueKey };
