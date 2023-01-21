import { React } from 'react';
import Todo from './Todo';
import TodoManager from '../../../services/TodoManager';
import { Box, Paper } from '@mui/material';

const TodoList = (context) => {
	const filteredTodos = TodoManager.filterTodos(context);

	return (
		<Paper sx={ { backgroundColor: 'list.main' } }>
			<Box
				role="TodoList"
				className="column"
			>
				{ filteredTodos.map((todo, index) =>
					<Todo
						key={ index }
						{ ...{ ...context,
							data: { todo }} }
					/>) }
			</Box></Paper>
	);
};

export default TodoList;
