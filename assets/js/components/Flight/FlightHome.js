import _ from 'lodash';
import Select from 'react-select';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Datetime from 'react-datetime';

import { fetchFlights, selectFlight, deleteFlight } from '../../actions/flight';
import { isFetchingRequest, isFetchingComplete } from '../../actions/Fetching';

import FlightList from './FlightList';
import Pagination from '../Pagination/Pagination';
import FlightModal from './FlightModal';
import FlightSearch from './FlightSearch';

class FlightHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			currentDisplayedFlights: _.map(
				this.props.flights.flights,
				value => value
			),
			loadStatus: 'all',
			searchPhone: '',
			searchTerm: '',
			currentPage: 1,
			resultsPerPage: 25,
			allLength: '',
			totalPages: 1,
			classType: '',
			departure: '',
			departureDate: '',
			arrival: '',
			arrivalDate: ''
		};
	}

	initMaterialize() {
		setTimeout(() => {
			let modal = document.querySelectorAll('.modal');
			let modalInstance = M.Modal.init(modal);

			let selectInstance3 = document.querySelectorAll('select');
			let customerSelectInstance3 = M.FormSelect.init(selectInstance3);
		}, 0);
	}
	componentDidMount() {
		// this.props.fetchFlights();
		// this.props.fetchFlightCheap();

		window.scrollTo(0, 0);

		this.initMaterialize();
		this.setState({
			allLength: this.state.currentDisplayedFlights.length
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.currentDisplayedFlights != this.state.currentDisplayedFlights
		) {
			this.initMaterialize();
			this.setState({
				allLength: this.state.currentDisplayedFlights.length
			});
		}
		if (prevProps.flights.flights != this.props.flights.flights) {
			let currentDisplayedFlights = _.map(
				this.props.flights.flights,
				value => value
			);
			this.setState({
				currentDisplayedFlights: currentDisplayedFlights
			});
		}
	}

	// Dispatches action which stores selected customer to customers/ selectedCustomer in Redux
	customerModal(customer) {
		this.props.selectFlight(customer);
	}

	//
	// Renders list of Flights based on react state
	renderFlights = () => {
		if (this.state.currentDisplayedFlights.length === 0) {
			return (
				<tr>
					<td style={{ paddingLeft: '26px' }}>No Flights Found</td>
				</tr>
			);
		} else {
			if (this.state.currentPage == 1) {
				let resultsPerPage = this.state.resultsPerPage;
				let currentPage = this.state.currentPage;

				const flights = this.state.currentDisplayedFlights.slice(
					0,
					currentPage * resultsPerPage
				);
				let totalPages = Math.ceil(flights.length / resultsPerPage);
				return flights.map((flight, i) => {
					return (
						<tr
							href="#flightModal"
							className="modal-trigger flightList__tr"
							key={i}
							onClick={() => this.customerModal(flight)}
						>
							<td className="flightList__td">{flight.classType}</td>
							<td className="flightList__td">{flight.departure}</td>
							<td className="flightList__td">
								{this.props.flights.selectedFlight
									? moment
											.unix(flight.departureTime)
											.format('MM/DD/YYYY H:mm A')
									: ''}
							</td>
							<td className="flightList__td">{flight.arrival}</td>
							<td className="flightList__td">
								{this.props.flights.selectedFlight
									? moment.unix(flight.arrivalTime).format('MM/DD/YYYY h:mm A')
									: ''}
							</td>
						</tr>
					);
				});
				return displayFlights;
			} else {
				let resultsPerPage = this.state.resultsPerPage;
				let currentPage = this.state.currentPage;

				const flights = this.state.currentDisplayedFlights.slice(
					currentPage * resultsPerPage - resultsPerPage,
					currentPage * resultsPerPage
				);
				let totalPages = Math.ceil(flights.length / resultsPerPage);

				return flights.map((flight, i) => {
					return (
						<tr
							href="#flightModal"
							className="modal-trigger flightList__tr"
							key={i}
							onClick={() => this.customerModal(flight)}
						>
							<td className="flightList__td">{flight.classType}</td>
							<td className="flightList__td">{flight.departure}</td>
							<td className="flightList__td">
								{this.props.flights.selectedFlight
									? moment
											.unix(flight.departureTime)
											.format('MM/DD/YYYY h:mm A')
									: ''}
							</td>
							<td className="flightList__td">{flight.arrival}</td>
							<td className="flightList__td">
								{this.props.flights.selectedFlight
									? moment.unix(flight.arrivalTime).format('MM/DD/YYYY h:mm A')
									: ''}
							</td>
						</tr>
					);
				});
			}
		}
	};

	//************************************* Flight Search  Begins *************************************
	handleFilter = (target, event) => {
		if (target == 'classType') {
			this.setState({ classType: event.value }, () => this.handleSearch());
		} else if (target == 'arrival') {
			this.setState({ arrival: event.value }, () => this.handleSearch());
		} else if (target == 'departure') {
			this.setState({ departure: event.value }, () => this.handleSearch());
		} else if (target == 'arrivalDate') {
			this.setState({ arrivalDate: event._d }, () => this.handleSearch());
		} else if (target == 'departureDate') {
			this.setState({ departureDate: event._d }, () => this.handleSearch());
		}
	};
	handleSearch = () => {
		//current user search filter values
		let searchInputs = {
			classType: this.state.classType,
			departure: this.state.departure,
			arrival: this.state.arrival
			// departureDate: this.state.departureDate,
			// arrivalDate: this.state.arrivalDate
		};

		let cFlights = this.props.flights.flights;
		if (this.state.departureDate && this.state.arrivalDate) {
			cFlights = _.filter(
				this.props.flights.flights,
				value =>
					value.departureTime >=
						parseInt(
							moment(this.state.departureDate)
								.valueOf()
								.toString()
								.slice(0, 10)
						) &&
					value.arrivalTime <=
						parseInt(
							moment(this.state.arrivalDate)
								.valueOf()
								.toString()
								.slice(0, 10)
						)
			);
		} else if (this.state.departureDate) {
			cFlights = _.filter(
				this.props.flights.flights,
				value =>
					value.departureTime >=
					parseInt(
						moment(this.state.departureDate)
							.valueOf()
							.toString()
							.slice(0, 10)
					)
			);
		} else if (this.state.arrivalDate) {
			cFlights = _.filter(
				this.props.flights.flights,
				value =>
					value.arrivalTime <=
					parseInt(
						moment(this.state.arrivalDate)
							.valueOf()
							.toString()
							.slice(0, 10)
					)
			);
		}

		cFlights = _.map(cFlights, value => value);

		let runSearch = (array, filters) => {
			const filterKeys = Object.keys(filters);
			// filters all elements passing the criteria
			return array.filter(item => {
				// dynamically validate all filter criteria
				return filterKeys.every(key => {
					// ignores an empty filter
					if (!filters[key].length) return true;
					return filters[key].includes(item[key]);
				});
			});
		};

		let filteredResults = runSearch(cFlights, searchInputs);

		this.setState({
			currentDisplayedFlights: filteredResults
		});
	};

	//************************************* Flight Search  Ends *************************************

	//************************************* PAGINATION  Begins *************************************
	renderNextPage = () => {
		if (
			this.state.currentPage <
			Math.ceil(
				this.state.currentDisplayedFlights.length / this.state.resultsPerPage
			)
		) {
			this.setState(prevState => ({
				currentPage: prevState.currentPage + 1
			}));
		}
	};
	renderPrevPage = () => {
		if (this.state.currentPage > 1) {
			this.setState(prevState => ({
				currentPage: prevState.currentPage - 1
			}));
		}
	};
	handleResultsPerPage = event => {
		const flights = this.props.flights.flights;
		this.setState({
			resultsPerPage: event.value,
			totalPages: Math.ceil(flights.length / event.value),
			currentPage: 1
		});
	};

	//************************************* PAGINATION  Ends *************************************
	handleDelete = () => {
		let id =
			this.props.flights.selectedFlight.classType +
			this.props.flights.selectedFlight.departure +
			this.props.flights.selectedFlight.departureTime +
			this.props.flights.selectedFlight.arrival +
			this.props.flights.selectedFlight.arrivalTime;

		if (confirm('Are you sure you want to delete the flight ?')) {
			this.props.deleteFlight(id).then(() => {
				M.toast({
					html: `Flight Deleted !`
				});
			});
		} else {
			return false;
		}
	};

	render() {
		const uniqueDepart = [
			...new Set(_.map(this.props.flights.flights, value => value.departure))
		];
		let departureOptions = [
			{ value: '', label: 'All' },
			...uniqueDepart.map(x => {
				return { value: x, label: x };
			})
		];

		const uniqueArrival = [
			...new Set(_.map(this.props.flights.flights, value => value.arrival))
		];
		let arrivalOptions = [
			{ value: '', label: 'All' },
			...uniqueArrival.map(x => {
				return { value: x, label: x };
			})
		];

		return (
			<section className="appContainer">
				<FlightSearch
					departure={departureOptions}
					arrival={arrivalOptions}
					onChange={this.handleFilter}
				/>

				<Pagination
					currentPage={this.state.currentPage}
					resultsPerPage={this.state.resultsPerPage}
					renderNextPage={this.renderNextPage}
					renderPrevPage={this.renderPrevPage}
					handleResultsPerPage={this.handleResultsPerPage}
					totalResults={this.state.currentDisplayedFlights.length}
					totalPages={this.state.totalPages}
					positionAbsolute="paginationSection__groupContainer--positionAbsolute"
				/>

				<FlightList
					renderFlights={this.renderFlights()}
					rowHeaders={['Class', 'Departure', 'Date', 'Arrival', 'Date']}
				/>

				<FlightModal
					classType={this.props.flights.selectedFlight.classType}
					departure={this.props.flights.selectedFlight.departure}
					departureTime={this.props.flights.selectedFlight.departureTime}
					arrival={this.props.flights.selectedFlight.arrival}
					arrivalTime={this.props.flights.selectedFlight.arrivalTime}
					handleDelete={this.handleDelete}
				/>
			</section>
		);
	}
}

function mapStatetoProps(state) {
	return {
		flights: state.flights,
		isFetching: state.isFetching
	};
}

export default connect(
	mapStatetoProps,
	{
		isFetchingRequest,
		isFetchingComplete,
		fetchFlights,
		selectFlight,
		deleteFlight
	}
)(FlightHome);
