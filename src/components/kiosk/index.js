import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Cart from "./Cart";

const Kiosk = () => {

	const [target, setTarget] = useState({pno:0});
	const [wanted, setWanted] = useState(null);

	const requestViewProduct = ( id ) => {
		console.log("requestViewProduct" + id);
		setTarget({pno:id});	
		// 매번 새로운 객체를 만듦(똑같은 pno를 선택해도 갱신될 수 있도록)
	}

	const requestBuy = (product) => {
		console.log("Request Buy");
		console.log(product);
		setWanted(product);
	}


	return (  
		<div>
			<ProductList requestViewProduct={requestViewProduct}></ProductList>
			<ProductDetail target={target} requestBuy={requestBuy}></ProductDetail>
			<Cart {...wanted}></Cart>
		</div>
	);
}
 
export default Kiosk;