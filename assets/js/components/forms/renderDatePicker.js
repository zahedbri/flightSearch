import React from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';

const renderDatePicker = ({
	dateField,
	className,
	input,
	label,
	type,
	requiredStar,
	meta: { touched, error }
}) => (
	<div
		className={`input-field inline ${className} ${
			touched && error ? 'has-danger' : ''
		}`}
	>
		<label className="active">{label}</label>
		<Datetime
			value={input.value}
			onChange={param => input.onChange(param)}
			required
			{...input}
		/>
		<div className="text-help">{touched ? error : ''}</div>
	</div>
);

export { renderDatePicker };
