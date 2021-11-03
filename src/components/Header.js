import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../images/cart.png";

const Header = ({cart}) => {
	return (
		<div id="header">
			<h1 id="header-title">Shopping Cart</h1>
			<div id="header-menu">
				<Link to="/">Home</Link>
				<Link to="/shop">Shop</Link>
			</div>
			<Link to="/cart">
				<div id="header-cart">
					<img id="cart-icon" src={cartIcon} alt="" />
					({cart.length})
				</div>
			</Link>
		</div>
	);
};

export default Header;