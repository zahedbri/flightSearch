import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Nav extends Component {
	componentDidMount() {
		setTimeout(() => {
			var elemsSideNav = document.querySelectorAll('.sidenav');
			var instancesSideNav = M.Sidenav.init(elemsSideNav);
		}, 0);
	}

	render() {
		return (
			<>
				<nav>
					<div className="nav-wrapper">
						<a href="#!" className="brand-logo">
							<i className="material-icons material-icons--logo">
								airplanemode_active
							</i>
							Toki Airways
						</a>
						<a href="#" data-target="mobile-demo" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul className="right hide-on-med-and-down">
							<li>
								<NavLink
									to="/flight/search"
									className="nav__link"
									activeClassName="nav__selected"
								>
									Search Flight
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/flight/addnew"
									className="nav__link"
									activeClassName="nav__selected"
								>
									Add Flight
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>

				<ul className="sidenav" id="mobile-demo">
					<li>
						<NavLink
							to="/flight/search"
							className="nav__link"
							activeClassName="nav__selected"
						>
							Search Flight
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/flight/addnew"
							className="nav__link"
							activeClassName="nav__selected"
						>
							Add Flight
						</NavLink>
					</li>
				</ul>
			</>
		);
	}
}

export default Nav;
