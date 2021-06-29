import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.item}>
				<div className={classes.buttonNav}>
					<NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
				</div>

				<div className={classes.buttonNav}>
					<NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
				</div>

				<div className={classes.buttonNav}>
					<NavLink to='/News' activeClassName={classes.activeLink}>News</NavLink>
				</div>

				<div className={classes.buttonNav}>
					<NavLink to='/Music' activeClassName={classes.activeLink}>Music</NavLink>
				</div>

				<div className={classes.buttonNav}>
					<NavLink to='/Setting' activeClassName={classes.activeLink}>Setting</NavLink>
				</div>
				<div>
					<span className={classes.friends}>Friends</span>
				</div>
			</div>
		</nav>
	);
}


export default Navbar;