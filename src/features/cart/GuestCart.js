import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalPrice } from './cartSlice';

const GuestCart = () => {
	const navigate = useNavigate();
	const cart = useSelector((state) => state.cart.cart);
	const totalItem = useSelector((state) => state.cart.totalItems);
	const totalPrice = useSelector(getTotalPrice);
	const handleLogin = () => {
		navigate('/profile');
	};
	return (
		<div className='cart'>
			<h1> Guest's items: </h1>
			<div className="cart-item-header">
				<span className='header-element'>item</span>
				<span className='header-element'>qty</span>
				<span className='header-element'>price</span>
				<span className='header-element'>
					<div></div>
				</span>
			</div>
			<div className='cart-container'>
			{totalItem < 1 ? (
				<h1> Empty Cart </h1>
			) : (
				cart.map((item, i) => (
					<div className="cart-item" key={item.card.id} style={{
						animationDuration: `${(i + 1) * .5}s`
					}}>
						{console.log(item)}
						<div className="cart-item-name">
						<Link to={`/cards/${item.card.id}`}>
							<img className='cart-image' src={item.card.imgCart} alt="" />
							<div className='image-name'> {item.card.name} </div>
						</Link>
						</div>
						<div className='cart-item-qty'> {item.qty} </div>
						<div className='cart-item-price'> {item.price} </div>
						<button className='cart-delete-button'>Delete</button>
					</div>
				))
			)}
			</div>
			<span> Total: {totalPrice} </span>
			<button> Checkout </button>
		</div>
	);
};

export default GuestCart;