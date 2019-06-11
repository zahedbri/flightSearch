import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import rootReducer from './reducers';

import Nav from './components/Nav/Nav';
import Home from './components/Home';
import FlightHome from './components/Flight/FlightHome';
import FlightAddNew from './components/Flight/FlightAddNew';
import FlightEdit from './components/Flight/FlightEdit';
import LoadingComponent from './components/LoadingComponent';

const initialState = {};
const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	// compose(applyMiddleware(...middleware))
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<LoadingComponent />
			<div id="app-container">
				<Nav />
				<Switch>
					<Route path="/flight/addnew" component={FlightAddNew} />
					<Route path="/flight/search" component={FlightHome} />
					<Route path="/flight/edit" component={FlightEdit} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
);
