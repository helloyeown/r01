import { useState } from "react"

const products = [
	{pno:1, pname:'Americano', price:7000},
	{pno:2, pname:'Latte', price:10000},
	{pno:3, pname:'Milk Tea', price:50000},
	{pno:4, pname:'Green Tea', price:90000}
]

const getTotal = (arr) => {
	if(!arr || arr.length === 0){
		return 0;
	}

	let sum = 0;

	// reduce
	for(const ele of arr){
		sum += (ele.price * ele.qty)
	}
	return sum;
}


const Kiosk = () => {

	const [items, setItems] = useState([]);

	const handleClickBuy = (product) => {
		console.log({...product, qty:1});

		const result = items.filter( ele => ele.pno === product.pno )
		// 필터의 결과는 배열
		// 처음 누르면 빈 배열(pno가 없기 때문), 다음 클릭부터 누적

		console.log("result", result);

		if(result.length === 0){	// 빈 배열이면
			setItems([...items, {...product, qty:1}]);		// 기존의 배열에 새로운 상품 추가해줘야 함
			return;
		}

		const cartItem = result[0];
		cartItem.qty += 1;
		setItems([...items])

	}

	const handleClickQty = (pno, amount) => {
		console.log("pno", pno,  "amount", amount);

		const target = items.filter(item => item.pno === pno)[0];

		console.log(target);

		// increase
		if(amount === 1){
			target.qty += 1;
			setItems([...items])
		} else {

			if(target.qty === 1){
				setItems( items.filter(ele => ele.pno !== pno) )
			} else {
				target.qty -= 1;
				setItems([...items])
			}

		}
	}
	


		return ( 
		<div className="w-full h-[100vh] bg-[#1e3932] flex">
			<div className="w-2/3 bg-[#00704a] p-8">
				<h1 className="mb-5"><img src="/image/logo.png"/></h1>
				<div className="text-4xl font-extrabold m-2 text-white">Products</div>

				<ul>
					{products.map( p => 
					<li
					key={p.pno} 
					className="text-2xl m-3 p-3 bg-[#00704a] border-white text-white border-b-2"
					onClick={() => {handleClickBuy(p)}}>
						{p.pno} - {p.pname} - {p.price}
						<button className="border-2 m-2 p-2 rounded-lg bg-[#2C2A29] text-white">BUY</button>
					</li>)}
				</ul>
			</div>
			<div className="w-1/3">
				<div className="text-4xl font-extrabold text-white m-2">Cart</div>

				<ul>
					{items.map( (item,idx) => 
					<li key={idx} className="m-2 pb-2 border-b-2 border-white">
						<div className="flex text-3xl text-white m-4 p-4 justify-between">
							<div>{item.pno}</div>
							<div>{item.pname}</div>
							<div>{item.price}</div>
						</div>
						<div className="flex justify-center text-2xl" >
							<button 
							className="m-1 rounded-lg bg-yellow-50 p-4"
							onClick={() => handleClickQty(item.pno, 1) }
							>
								+
							</button>

							<p className="m-2 text-[#f6f5ef] p-2">{item.qty}</p>
							<button 
							className="m-1 rounded-lg bg-yellow-50 p-4"
							onClick={() => handleClickQty(item.pno, -1) }
							>
								-
							</button>
						</div>
					</li> )}
				</ul>

				<div className="bg-white text-5xl text-[#2C2A29] mt-10 p-5">
						TOTAL {getTotal(items)}
				</div>

			</div>
		</div>
	 );
}
 
export default Kiosk;