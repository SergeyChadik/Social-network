import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img src='https://lh5.googleusercontent.com/FXUvmb1Ph0hZdiaNWOYHj5J_y54pj9d-5sjm247jxdmZ74EJ8PeJTCztyzxNyaqbzLxNPjn68JIqjfYPXisYAFKYZt-n0drUr79JjXv71Ugd-j6H_5IIdMbCIWP6NcRYBazVZEMV' />
			<div className={classes.loginBlock}>
				{props.isAuth
					? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
}


export default Header;