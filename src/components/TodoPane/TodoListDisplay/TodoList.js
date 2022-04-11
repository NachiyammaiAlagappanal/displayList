import { React } from 'react';
import Todo from './Todo';
import TodoManager from '../../../services/TodoManager';

const TodoList = (context) => {
	const filteredTodo = TodoManager.filterTodos(context);

	return (
		<div role="TodoList">
			{ filteredTodo.map((todo) => Todo({
				...context,
				data: { todo },
			})) }
		</div>
	);
};

export default TodoList;
