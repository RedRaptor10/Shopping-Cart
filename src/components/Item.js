import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data";

const Item = ({cart, setCart}) => {
	const itemIds = data.map(item => {return item.id}); // Array of item ids from data
	const { id } = useParams(); // Get item id from url
	const pos = itemIds.indexOf(parseInt(id)); // Get array position of id
	const item = {...data[pos]}; // Clone object from data item (using spread notation)
	const [quantity, setQuantity] = useState(1); // Quantity state

	// Dynamically change quantity state from input
	const handleChange = (event) => {
		// Check if input is an Integer and between 0 and 100
		if (parseInt(event.target.value) && event.target.value > 0 && event.target.value < 100) {
			setQuantity(Math.round(event.target.value));
		}
	};

	const decrementQty = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const incrementQty = () => {
		if (quantity < 100) {
			setQuantity(quantity + 1);
		}
	};

	const addToCart = () => {
		let includes = false;
		let itemCartPos = null;

		// Check if cart includes item
		for (let i = 0; i < cart.length; i++) {
			if (cart[i].id === parseInt(id)) {
				includes = true;
				itemCartPos = i;
			}
		}

		/* If cart includes item, add selected quantity to current quantity,
		else add item to cart */
		if (includes) {
			let newCart = cart.slice(0); // Clone cart array
			newCart[itemCartPos].quantity += quantity;
			setCart(newCart);
		} else {
			item.quantity = quantity;
			setCart(cart.concat(item));
		}
	};

	return (
		<div className="item-container">
		{pos >= 0 && pos < data.length ? // Check position boundaries
			<div id="item">
				<div className="item-image-container"><img className="item-image" src={item.image} alt="" /></div>
				<div className="item-details">
					<div className="item-name"><h1>{item.name}</h1></div>
					<div className="item-price">${item.price.toFixed(2)}</div>
					<div className="item-description">{item.description}</div>
					<div className="item-qty-container">Qty: <input id="input-qty" type="number" value={quantity} onChange={handleChange} />
						<button id="decrement-btn" className="item-qty-button" onClick={decrementQty}>-</button>
						<button id="increment-btn" className="item-qty-button" onClick={incrementQty}>+</button>
					</div>
					<div className="item-buttons-container">
						<button id="add-to-cart-btn" className="item-button" onClick={addToCart}>Add to Cart</button>
						<Link to="/cart"><button id="cart-btn" className="item-button">Go to Cart</button></Link>
					</div>
				</div>
			</div>
		: null}
		</div>
	);
};

export default Item;