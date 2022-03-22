import { React } from 'react';
import Todo from './todo';
import context from '../core/context';
import todoManager from '../services/todoManager';

const TodoList = () => {
	const { todos, filter } = context.state;
	const filteredTodo = todoManager.filterTodos(todos, filter);

	return (
		<div>
			{ filteredTodo.map(Todo) }
		</div>
	);
};

export default TodoList;
