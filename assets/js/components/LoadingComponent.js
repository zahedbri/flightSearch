import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoadingComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdown: false,
			loading: this.props.fetching
		};
	}

	componentDidMount() {}

	render() {
		return (
			<section
				id="loading-comp"
				className={this.props.fetching === true ? 'active' : ''}
			>
				<div className="loading-icon">
					<div
						className="lds-css ng-scope"
						style={{ width: '200px', height: '200px' }}
					>
						<div
							style={{ width: '100%', height: '100%' }}
							className="lds-rolling"
						>
							<div />
						</div>
					</div>
				</div>

				<div className="loading-icon">
					<div
						className="lds-css ng-scope"
						style={{ width: '200px', height: '200px' }}
					>
						<div
							style={{ width: '100%', height: '100%' }}
							className="lds-double-ring"
						>
							<div />
						</div>
					</div>
				</div>

				<div className="loading-text">
					{this.props.loadingText ? this.props.loadingText : 'Loading Flights'}
				</div>
			</section>
		);
	}
}

function mapStatetoProps(state) {
	return {
		fetching: state.isFetching
	};
}
export default connect(mapStatetoProps)(LoadingComponent);
