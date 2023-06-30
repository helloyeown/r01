import { useEffect, useState } from "react";
import Todo1List from "./Todo1List";
import Todo1Input from "./Todo1Input";
import Todo1Read from "./Todo1Read";
import uuid from 'react-uuid'

const Todo1 = () => {

	const [todos, setTodos] = useState([]);
	const [current, setCurrent] = useState(null);

	
	const addTodo = (todoObj) => {
		console.log(uuid(), todoObj);

		setTodos([...todos, {tno:uuid(), ...todoObj}])
	}

	
	const requestView = (tno) => {
		const target = todos.filter(todo => todo.tno === tno)[0];
		console.log("requestView", target);
		setCurrent(target);
	}


	// 삭제
	const remove = (tno) => {
		setTodos(todos.filter(todo => todo.tno !== tno))
		setCurrent(null);
	}


	// 수정
	const modify = (modifiedTodo) => {
		const target = todos.filter(todo => todo.tno === modifiedTodo.tno)[0];

		target.title = modifiedTodo.title;

		setTodos([...todos]);
		setCurrent(null);
	}


	return (  
		<>
			<div className="text-5xl">Todo 1</div>
			<div>
			<Todo1Input addTodo={addTodo}></Todo1Input>
			<Todo1Read current={current} remove={remove} modify={modify}></Todo1Read>
			<Todo1List requestView={requestView} todos={todos}></Todo1List>
			</div>
		</>
	);
}
 
export default Todo1;