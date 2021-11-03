// Example: https://github.com/Harvok17/shopping-cart

import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Shop from "./Shop";
import Item from "./Item";
import Cart from "./Cart";

const App = () => {
	const [cart, setCart] = useState([]);

	return (
		<BrowserRouter>
			<Header cart={cart} />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/shop/item/:id">
					<Item cart={cart} setCart={setCart} />
				</Route>
				<Route exact path="/cart">
					<Cart cart={cart} setCart={setCart} />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;