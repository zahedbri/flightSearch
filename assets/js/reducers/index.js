import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import FlightReducer from './flightReducer';
import IsFetchingReducer from './isFetchingReducer';

const rootReducer = combineReducers({
	form: formReducer,
	flights: FlightReducer,
	isFetching: IsFetchingReducer
});

export default rootReducer;
