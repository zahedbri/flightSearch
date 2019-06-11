import React from 'react';
import Select from 'react-select';
import moment from 'moment';
import Datetime from 'react-datetime';

import {
	reactSelectStylesDarkText,
	reactSelectStylesFlightSearch
} from '../forms';

const FlightSearch = ({ departure, arrival, onChange }) => {
	return (
		<div className="flightSearch">
			<div className="flightSearch__container">
				<div className="flightSearch__group">
					<div className="flightSearch__row flightSearch__row--title">
						Departure
					</div>
					<div className="flightSearch__row flightSearch__row--title">
						Arrival
					</div>
				</div>
				<div className="flightSearch__group">
					<div className="flightSearch__row">
						<Select
							label="Departure"
							name="departure"
							className="flightSearch__field"
							type="select"
							onChange={onChange.bind(this, 'departure')}
							placeholder="From..."
							options={departure}
							styles={reactSelectStylesFlightSearch}
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
						/>
					</div>
					<div className="flightSearch__row">
						<Select
							label="Arrival"
							name="arrival"
							className="flightSearch__field"
							type="select"
							onChange={onChange.bind(this, 'arrival')}
							placeholder="To Where ?"
							options={arrival}
							styles={reactSelectStylesFlightSearch}
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
						/>
					</div>
				</div>
				<div className="flightSearch__group">
					<div className="flightSearch__row">
						<Datetime
							className="flightSearch__field"
							onChange={onChange.bind(this, 'departureDate')}
							inputProps={{ placeholder: 'Date' }}
						/>
					</div>
					<div className="flightSearch__row">
						<Datetime
							className="flightSearch__field"
							onChange={onChange.bind(this, 'arrivalDate')}
							inputProps={{ placeholder: 'Date' }}
						/>
					</div>
				</div>
				<div className="flightSearch__group">
					<div className="flightSearch__row">
						<Select
							label="classType"
							name="classType"
							className="flightSearch__field"
							type="select"
							onChange={onChange.bind(this, 'classType')}
							placeholder="Choose Class"
							options={[
								{ value: '', label: 'All' },
								{ value: 'business', label: 'Business' },
								{ value: 'cheap', label: 'Cheap' }
							]}
							styles={reactSelectStylesFlightSearch}
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
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlightSearch;
