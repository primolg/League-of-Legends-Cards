import React from 'react';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Cards from './features/cards/Cards';
import SingleCard from './features/cards/singleCard';
import Cart from './features/cart/Cart';
import UserProfile from './features/profile/UserProfile';
import Login from './features/login/Login';
import SignUp from './features/signUp/SignUp';

export default function App() {
	return (
		<div className="App">

			<Nav />
	
				<Routes>
					<Route index path="/cards" element={<Cards />} />
					<Route index path="/cards/:id" element={<SingleCard />} />
					<Route exact path="/profile" element={<UserProfile />} />
					<Route exact path="/cart" element={<Cart />} />
					<Route path = '/login' element = {<Login/>}/>
					<Route path = '/signUp' element={<SignUp/>}/>
				</Routes>

		</div>
	);
}
