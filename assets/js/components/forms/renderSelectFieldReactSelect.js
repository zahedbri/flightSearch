import React from 'react';
import Select from 'react-select';
import { reactSelectStyles } from './reactSelectStyles.js';

const renderSelectFieldReactSelect = ({
	children,
	className,
	input,
	label,
	type,
	options,
	value,
	placeholder,
	onBlur,
	defaultValue,
	disabled,
	meta: { touched, error }
}) => (
	<div
		className={`input-fields ${className} ${
			touched && error ? 'has-danger' : ''
		}`}
	>
		<div className="label-group">
			<label className="active label-group__label"> {label}</label>
		</div>
		<Select
			{...input}
			options={options}
			placeholder={placeholder}
			className="form-control"
			styles={reactSelectStyles}
			theme={theme => ({
				...theme,
				borderRadius: 0,

				// borderStyle:"none !important",

				colors: {
					...theme.colors,
					//background
					// neutral0:"white",

					//border and divider of arrow - initial
					neutral20: '#5695e1',

					//arrow down - after its not pristine
					neutral60: '#5695e1',

					// no options text when user searching
					neutral40: 'orange',
					//chosen field on dropdown from previous
					primary: '#5695e1',

					//highlight at hover
					primary25: '#a0c9fa',
					//Placeholder
					neutral50: '#5695e1',

					//selectd value text color
					neutral80: 'rgba(0,0,0,0.87)',
					//hover over container
					neutral30: '#5695e1'

					// neutral5:"#dd4c4c",
					// neutral10:"#dd4c4c",
					//
					// primay50:"#dd4c4c",
					// neutral70:"#dd4c4c",
					// neutral90:"#dd4c4c"
				}
			})}
			selected={value}
			defaultValue={defaultValue}
			// onChange={(event)=>console.log("look",input)}

			// onChange={(event)=>handleOnChange(input.name,event)}
			onChange={value => input.onChange(value)}
			onBlur={onBlur}
			isDisabled={disabled}
		/>

		<div className="text-help">{touched ? error : ''}</div>
	</div>
);

export { renderSelectFieldReactSelect };
