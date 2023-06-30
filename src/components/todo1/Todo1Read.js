import { useEffect, useState } from "react";

const Todo1Read = ({current, remove, modify}) => {

	const [todo, setTodo] = useState(current);

	useEffect(() => {
		setTodo(current)
	}, [current])
	// 비동기 통신은 무조건 useEffect
	// 유지되는 상태를 props에 따라 값을 바꿔주고 싶을 때 (v)


	if (!todo) { 
		return <></>
	}


	return (  
		<div className="bg-red-200 w-full">
			<div>Todo1 Read</div>
			<div>
				{todo.tno}
			</div>
			<div>
				<input type="texet" name="title" value={todo.title} onChange={(e) => {
					todo.title = e.target.value
					setTodo({...todo})
				}}/>
				<div>
					<button className="m-3 p-2 bg-blue-300"
					onClick={() => modify(todo)}
					>MOD</button>

					<button className="m-3 p-2 bg-red-300"
					onClick={() => remove(todo.tno)}
					>DEL</button>
				</div>
			</div>
		</div>
	);
}
 
export default Todo1Read;