import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const FlightModal = ({
	classType,
	departure,
	departureTime,
	arrival,
	arrivalTime,
	handleDelete
}) => (
	<div id="flightModal" className="modal flightModal">
		<div className="modal-content">
			<div className="flightModal__classType">{classType}</div>
			<div className="flightModal__container">
				<div className="flightModal__group flightModal__group--green">
					<h4>
						<span className="flightModal__title">Departure</span> :{' '}
						{departure ? departure : ''}
					</h4>
					<h4>
						{' '}
						<span className="flightModal__title">Date</span> :{' '}
						{moment.unix(departureTime).format('MM/DD/YYYY h:mm A')}
					</h4>
				</div>
				<div className="flightModal__group flightModal__group--blue">
					<h4>
						{' '}
						<span className="flightModal__title">Arrival</span> : {arrival}
					</h4>
					<h4>
						{' '}
						<span className="flightModal__title">Date</span> :{' '}
						{moment.unix(arrivalTime).format('MM/DD/YYYY h:mm A')}
					</h4>
				</div>
			</div>
		</div>
		<div className="modal-footer">
			<section className="modalButtons">
				<Link
					to="/flight/edit"
					className="modal-close waves-effect waves-green btn orange"
				>
					Edit<i className="material-icons right">edit</i>
				</Link>
				<a
					onClick={handleDelete}
					className="modal-close waves-effect waves-green btn red"
				>
					Delete<i className="material-icons right">delete</i>
				</a>
				<a
					href="#!"
					className="modal-close waves-effect waves-green btn grey darken-4"
				>
					Close<i className="material-icons right">close</i>
				</a>
			</section>
		</div>
	</div>
);

export default FlightModal;
