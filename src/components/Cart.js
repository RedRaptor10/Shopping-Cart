import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cart, setCart}) => {
	const removeItem = (id) => {
		let itemCartPos;

		// Get item position in cart
		for (let i = 0; i < cart.length; i++) {
			if (cart[i].id === id) {
				itemCartPos = i;
			}
		}

		// Split cart array, then concatenate into new cart array
		const array1 = cart.slice(0, itemCartPos);
		const array2 = cart.slice(itemCartPos + 1);
		const newCart = array1.concat(array2);
		setCart(newCart);
	}

	const calcTotal = () => {
		let total = 0;

		cart.forEach(item => {
			total += item.price * item.quantity;
		});

		return total.toFixed(2);
	}

	return (
		<div className="cart-container">
		{cart.length > 0 ?
			<div>
				<div className="cart-title"><h1>Cart</h1></div>
				{cart.map((item, i) => {
					return (
						<div className="cart-item-container" key={i}>
							<div className="item-image-container"><img className="item-image" src={item.image} alt="" /></div>
							<div className="item-details">
								<div className="item-name">
									<Link to={`/shop/item/${item.id}`}>
										<h1>{item.name}</h1>
									</Link>
								</div>
								<div className="item-price">Price: ${item.price}</div>
								<div className="item-description">{item.description}</div>
								<div>Qty: {item.quantity}</div>
								<div className="item-buttons-container">
									<button id="remove-item-btn" className="item-button" onClick={() => {removeItem(item.id)}}>Remove</button>
								</div>
							</div>
						</div>
					);
				})}
				<div className="cart-checkout">
					<div className="cart-total">Total: ${calcTotal()}</div>
					<button id="checkout-btn" className="item-button">Checkout</button>
				</div>
			</div>
		: <div className="cart-empty"><h1>Your cart is empty</h1></div>}
		</div>
	);
};

export default Cart;