import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reactSelectStylesPagination } from '../forms';

import Select from 'react-select';

class Pagination extends Component {
	renderPagination = () => {
		const {
			currentPage,
			resultsPerPage,
			totalPages,

			handleResultsPerPage,
			totalResults
		} = this.props;

		return (
			<div className="paginationSection__resultGroup">
				<Select
					label="Pagination"
					name="pagination"
					className="paginationSection__field paginationSection__field--minWidth85"
					onChange={handleResultsPerPage}
					defaultValue={{ value: 25, label: 25 }}
					placeholder="Results/pg"
					options={[
						{ value: 5, label: '5' },
						{ value: 10, label: '10' },
						{ value: 25, label: '25' },
						{ value: 50, label: '50' },
						{ value: 75, label: '75' },
						{ value: 100, label: '100' }
					]}
					styles={reactSelectStylesPagination}
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
		);
	};

	render() {
		return (
			<div className="paginationSection">
				<div
					className={`paginationSection__groupContainer ${this.props.positionAbsolute}`}
				>
					<div className="paginationSection__group">
						<i
							className="material-icons paginationSection__button"
							onClick={this.props.renderPrevPage}
						>
							keyboard_arrow_left
						</i>
						{/*  <div onClick={this.props.renderPrevPage}
              className="pagination__button">
              Prev
          </div>
          */}
						{this.renderPagination()}
						<i
							className="material-icons paginationSection__button"
							onClick={this.props.renderNextPage}
						>
							keyboard_arrow_right
						</i>

						{/*
          <div
            onClick={this.props.renderNextPage}
            className="pagination__button">
            Next
          </div>
          */}
					</div>
					<h4 className="paginationSection__bottomText">
						Page{' '}
						<span className="paginationSection__bottomText--span">
							{this.props.currentPage}
						</span>{' '}
						/{Math.ceil(this.props.totalResults / this.props.resultsPerPage)} -
						({this.props.totalResults} results)
					</h4>
				</div>
			</div>
		);
	}
}

function mapStatetoProps(state) {
	return {};
}

export default connect(mapStatetoProps)(Pagination);
