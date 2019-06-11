import React, { Component } from 'react';
import { connect } from 'react-redux';

class FlightList extends Component {
	render() {
		const { handleAsc, handleDesc, renderFlights, rowHeaders } = this.props;
		return (
			<div className="display-table flightList">
				<table className="table-container responsive-table">
					<thead className="display-table__thead">
						<tr>
							{rowHeaders.map((item, i) => (
								<th key={i} className="row-header flightList__th">
									{item}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="display-table__list-items">{renderFlights}</tbody>
				</table>
			</div>
		);
	}
}

function mapStatetoProps(state) {
	return {};
}
export default connect(
	mapStatetoProps,
	{}
)(FlightList);
