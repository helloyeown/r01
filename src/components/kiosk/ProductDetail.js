import axios from "axios";
import { useEffect, useState } from "react";

const initState = {
	id:0,
	pname: '',
	price: 0
}

const ProductDetail = ({target, requestBuy}) => {

	const [product, setProduct] = useState(initState);	// 에러 안 나게 하기 위한 땜빵용

	useEffect(() => {
		console.log("useEffect.........", target);
		const id = target.pno;

		if (id !== 0) {
			axios.get(`http://localhost:80/products/${id}`).then(res => {
				setProduct(res.data);
			})
		}
	}, [target])
	// 렌더링 끝나면 id값 체크해서 바뀌었으면 useEffect 실행

	return (  
		<div>
			<div>Product Detail</div>
			<div>
				<div>ID {product.id}</div>
				<div>NAME {product.pname}</div>
				<div>PRICE {product.price}</div>
			</div>
			<div>
				<button className="bg-red-400 text-white"
				onClick={() => requestBuy(product)}
				>Add Cart</button>
			</div>
		</div>
	);
}
 
export default ProductDetail;