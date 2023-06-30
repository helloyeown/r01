import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

const ProductList = ({requestViewProduct}) => {

	const [obj, setObj] = useState([]);
	console.log(obj);

	useEffect(() => {
		axios.get('http://localhost/products').then(res => {
		console.log("effect inside" + res.data);
		setObj(res.data);
		})
	}, [])
	// []: 조건, 딱 한 번만 작업하고 싶을 때 (렌더링이 끝났을 때 한 번 일어남)
	
	if (obj.length === 0) {
		return (
			<div className="text-4xl">loading..................</div>
		);
	}


	return (  
		<ul>
			{obj.map(p => 
			<li key={p.id}
			onClick={() => requestViewProduct(p.id)}
			>{p.id} - {p.pname} - {p.price}</li>)}
		</ul>
	);
}
 
export default ProductList;