
const products = [
	{pno:1, pname:'Americano', price:7000},
	{pno:2, pname:'Latte', price:10000},
	{pno:3, pname:'Milk Tea', price:50000},
	{pno:4, pname:'Green Tea', price:90000}

]


const Kiosk = () => {

	const handleClickBuy = (product) => {
		console.log(product)
	}
	
		return ( 
		<div className="w-full h-[100vh] bg-pink-300 flex">
			<div className="w-2/3 bg-white">
				<div className="text-4xl font-extrabold">Products</div>

				<ul>
					{products.map( p => 
					<li
					key={p.pno} 
					className="text-2xl underline m-3 p-3 bg-yellow-50"
					onClick={() => {handleClickBuy(p)}}>
						{p.pno} - {p.pname} - {p.price}
						<button className="border-2 m-2 p-2 rounded-lg border-blue-500">BUY</button>
					</li>)}
				</ul>
			</div>
			<div className="w-1/3">
				<div className="text-4xl font-extrabold">Cart</div>
			</div>
		</div>
	 );
}
 
export default Kiosk;