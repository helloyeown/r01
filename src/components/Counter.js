import { useState } from "react";

const Counter = () => {

	console.log("render.......................");

	const [num, setNum] = useState(1);		// 초기화 값

	const handleClick = (amount) => {
		setNum(num + amount);		// 연산자는 항상 새로운 값을 만들기 때문에 리액트에 리렌더링 요청
		console.log("click", num);
	}

	return ( 
		<div className="w-full bg-red-300 h-1/2">
			<div className="text-5xl text-white">{num}</div>
			<button
			 className=" bg-slate-300 text-zinc-700 font-bold"
			 onClick={() => { handleClick(1) }}
			 >
				INC
				</button>
				<button
			 className=" bg-slate-300 text-zinc-700 font-bold ml-10"
			 onClick={() => { handleClick(-1) }}
			 >
				DEC
				</button>
		</div>
	 );
}
 
export default Counter;