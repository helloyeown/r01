import { useEffect, useState } from "react";

const Cart = ({id, pname, price}) => {

	const [items, setItems] = useState([]);
	console.log("Cart", id, pname, price);

	useEffect(() => {
		console.log("CART userEffect");
		if (!id || id === 0) {
			return;
		}
		setItems([...items, {id, pname, price, qty:1}])
	}, [id, pname, price])


	return (  
		<div>
			<div className="text-5xl">Cart</div>
			<div>
				<ul>
					{items.map((cartItem, idx) =>
						<li key={idx}>{cartItem.id} = {cartItem.pname} - {cartItem.price} - {cartItem.qty}</li>
					)}
				</ul>
			</div>
		</div>
	);
}
 
export default Cart;