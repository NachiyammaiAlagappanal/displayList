import { React } from 'react';
import Todo from './Todo';
import TodoManager from '../../../services/TodoManager';
import { Box } from '@mui/material';

const TodoList = (context) => {
	const filteredTodos = TodoManager.filterTodos(context);

	return (
		<Box role="TodoList">
			{ filteredTodos.map((todo) => Todo({
				...context,
				data: { todo },
			})) }
		</Box>
	);
};

export default TodoList;
