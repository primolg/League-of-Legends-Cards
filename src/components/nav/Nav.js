import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Nav = () => {
	const totalItem = useSelector((state) => state.cart.totalItems);
	// const totalItem = 1;

	return (
		<div className="nav">
			<nav className="nav-bar">
				<Link className="nav-link" to="/cards">
					Cards
				</Link>
				<Link className="nav-link" to="/profile">
					{' '}
					Profile{' '}
				</Link>
				<Link className="nav-link" to="/cart">
					{' '}
					Cart {totalItem > 0 ? `( ${totalItem} )` : ''}
				</Link>
			</nav>
		</div>
	);
};

export default Nav;
