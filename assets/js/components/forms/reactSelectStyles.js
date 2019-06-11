const reactSelectStyles = {
	option: (provided, state) => ({
		...provided,
		borderBottom: '1px dotted #5695e1',

		color: 'black'
		// color: state.isSelected ? 'red' : 'blue',
		// padding:"5px 20px",
	}),

	control: (provided, state) => ({
		...provided,
		height: 50,
		color: 'yellow',
		// background: 'white',
		background: 'transparent',
		border: state.isFocused ? 0 : 0,
		borderBottom: '1px solid #9e9e9e',
		// This line disable the blue border
		boxShadow: state.isFocused ? 0 : 0,
		'&:hover': {
			border: state.isFocused ? 0 : 0,
			borderBottom: '1px solid #5695e1'
		}
	}),
	input: base => ({
		...base,
		color: 'black'
	}),
	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1;
		const transition = 'opacity 300ms';
		const color = 'black';
		const textTransform = 'capitalize';

		return { ...provided, opacity, transition, color, textTransform };
	}
};
export { reactSelectStyles };
