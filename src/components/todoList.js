import { React } from 'react';
import Todo from './todo';
import todoManager from '../services/todoManager';

const TodoList = (context) => {
	const { state } = context;
	const { todos, filter } = state;
	const filteredTodo = todoManager.filterTodos(todos, filter);

	return (
		<div>
			{ filteredTodo.map(Todo) }
		</div>
	);
};

export default TodoList;
