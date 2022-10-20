import { React } from 'react';
import Todo from './Todo';
import TodoManager from '../../../services/TodoManager';

const TodoList = (context) => {
	const filteredTodos = TodoManager.filterTodos(context);

	return (
		<div role="TodoList">
			{ filteredTodos.map((todo) => Todo({
				...context,
				data: { todo },
			})) }
		</div>
	);
};

export default TodoList;
