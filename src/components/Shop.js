import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const Shop = () => {
	return (
		<div id="shop-container">
			{data.map((item, i) => {
				return (
					<Link key={i} to={`/shop/item/${item.id}`}>
						<div className="shop-item">
							<div className="shop-item-image-container"><img className="item-image" src={item.image} alt="" /></div>
							<div className="shop-item-name">{item.name}</div>
							<div className="shop-item-price">${item.price.toFixed(2)}</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Shop;