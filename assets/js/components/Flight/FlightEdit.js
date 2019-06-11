import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Datetime from 'react-datetime';
import { updateFlight } from '../../actions/flight';
import {
	getUniqueKey,
	renderField,
	renderDatePicker,
	renderSelectFieldReactSelect,
	requiredTrim,
	maxLength200,
	required,
	flightSubmitValidation
} from '../forms';

class FlightEdit extends Component {
	onSubmit = values => {
		let newValues = flightSubmitValidation(values);
		let uniqueKey = getUniqueKey(newValues);
		// Data did not come with a key.
		// created a key to prevent duplicate routes.
		let currentId =
			this.props.flights.selectedFlight.classType +
			this.props.flights.selectedFlight.departure +
			this.props.flights.selectedFlight.departureTime +
			this.props.flights.selectedFlight.arrival +
			this.props.flights.selectedFlight.arrivalTime;

		if (this.props.flights.flights[uniqueKey]) {
			alert('Flight is already in the database');
		} else {
			this.props.updateFlight(newValues, currentId, uniqueKey).then(() => {
				this.props.history.push('/flight/search');
				M.toast({
					html: `Flight Updated !`
				});
			});
		}
	};

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;
		const classOptions = [
			{ value: 'business', label: 'Business' },
			{ value: 'cheap', label: 'Cheap' }
		];
		return (
			<section className="flightAddNew">
				<div className="row load-fields-container">
					<form
						onSubmit={handleSubmit(this.onSubmit.bind(this))}
						className="form"
					>
						<div className="form__container">
							<div className="form__group">
								<Field
									label="Class"
									name="classType"
									className="col s12 flightAddNew__field"
									type="select"
									onBlur={() => input.onBlur(input.value)}
									component={renderSelectFieldReactSelect}
									placeholder="Choose Class"
									options={classOptions}
									validate={required}
								/>
							</div>
							<div className="form__group">
								<Field
									name="departure"
									type="text"
									component={renderField}
									label="Departure"
									className="col s12 flightAddNew__field flightAddNew__field--flex2"
									validate={[requiredTrim, maxLength200]}
								/>
								<Field
									name="departureTime"
									component={renderDatePicker}
									label="Date"
									validate={required}
									className="col s12 flightAddNew__field flightAddNew__field--flex1"
								/>
							</div>
							<div className="form__group">
								<Field
									name="arrival"
									type="text"
									component={renderField}
									label="Arrival"
									className="col s12 flightAddNew__field flightAddNew__field--flex2"
									validate={[requiredTrim, maxLength200]}
								/>
								<Field
									name="arrivalTime"
									component={renderDatePicker}
									label="Date"
									validate={required}
									className="col s12 flightAddNew__field flightAddNew__field--flex1"
								/>
							</div>

							<button
								className="btn waves-effect waves-light orange"
								type="submit"
								name="action"
							>
								Update Flight
								<i className="material-icons right">send</i>
							</button>
						</div>
					</form>
				</div>
			</section>
		);
	}
}

FlightEdit = reduxForm({
	form: 'FlightEdit'
})(FlightEdit);

FlightEdit = connect(
	state => ({
		flights: state.flights,
		initialValues: {
			...state.flights.selectedFlight,
			classType:
				state.flights.selectedFlight &&
				state.flights.selectedFlight.classType == 'business'
					? { value: 'business', label: 'Business' }
					: { value: 'cheap', label: 'Cheap' },
			departureTime: state.flights.selectedFlight
				? moment
						.unix(state.flights.selectedFlight.departureTime)
						.format('MM/DD/YYYY h:mm A')
				: '',
			arrivalTime: state.flights.selectedFlight
				? moment
						.unix(state.flights.selectedFlight.arrivalTime)
						.format('MM/DD/YYYY h:mm A')
				: ''
		},

		initialized: true,
		enableReinitialize: true
	}),
	{ updateFlight }
)(FlightEdit);

export default FlightEdit;
