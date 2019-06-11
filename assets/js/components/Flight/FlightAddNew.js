import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Datetime from 'react-datetime';
import { addFlight } from '../../actions/flight';

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

class FlightAddNew extends Component {
	state = {
		focused: '',
		date: ''
	};

	onSubmit(values) {
		let newValues = flightSubmitValidation(values);

		let uniqueKey = getUniqueKey(newValues);
		//checking current state to see if this flight already exists

		//preventing duplicate flights from being added
		if (this.props.flights.flights[uniqueKey]) {
			alert('Flight is already in the database');
		} else {
			this.props.addFlight(newValues).then(() => {
				this.props.history.push('/flight/search');
				M.toast({
					html: `New Flight added !`
				});
			});
		}
	}

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;
		const classOptions = [
			{ value: 'business', label: 'Business' },
			{ value: 'cheap', label: 'Cheap' }
		];
		return (
			<section className="flightAddNew">
				<div className="row">
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
									label="Date"
									component={renderDatePicker}
									validate={required}
									className="col s12 flightAddNew__field flightAddNew__field--flex1"
								/>
							</div>

							<button
								className="btn waves-effect waves-light green"
								type="submit"
								name="action"
							>
								Add Flight
								<i className="material-icons right">send</i>
							</button>
						</div>
					</form>
				</div>
			</section>
		);
	}
}

function mapStatetoProps(state) {
	return {
		flights: state.flights
	};
}
export default reduxForm({
	form: 'FlightAddNew'
})(
	connect(
		mapStatetoProps,
		{ addFlight }
	)(FlightAddNew)
);
