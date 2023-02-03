import { React } from 'react';
import Todo from './Todo';
import { Paper } from '@mui/material';
import TodoManager from '../../../../services/TodoManager';
import { Box } from 'native-base';

const TodoList = (context) => {
	const filteredTodos = TodoManager.filterTodos(context);

	return (
		<Paper sx={ { backgroundColor: 'list.main' } }>
			<Box
				role="TodoList"
				display="flex"
				flexDirection="column"
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
