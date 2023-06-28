import { useState } from "react";

const Counter2 = () => {

	// 객체 스타일
	const [obj, setObj] = useState({num:10});		// 초기값
	// obj가 바뀐 게 아니고 obj의 num값만 바뀜 (final)
	// -> 리렌더링 되지 않음

	return ( 
		<div>
			{obj.num}
			<button onClick={() => {
				obj.num += 1;
				console.log(obj.num);

				setObj({...obj});

			}}>INC</button>
		</div>
	 );
}
 
export default Counter2;