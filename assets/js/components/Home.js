import _ from 'lodash';
import Select from 'react-select';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFlights } from '../actions/flight';
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.fetchFlights();
	}

	render() {
		return (
			<section className="homepage">
				<div className="header">
					<h1 className="header__title">Welcome to Toki Airways</h1>
					<div className="button">
						<Link to="/flight/search" className="button__link">
							Search Flights....
						</Link>
					</div>
				</div>
			</section>
		);
	}
}

function mapStatetoProps(state) {
	return {
		isFetching: state.isFetching
	};
}

export default connect(
	mapStatetoProps,
	{
		fetchFlights
	}
)(Home);
