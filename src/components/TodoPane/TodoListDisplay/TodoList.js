import { React } from 'react';
import Todo from './Todo';
import TodoManager from '../../../services/TodoManager';
import { Box } from '@mui/material';
import ClearButton from '../UserInput/ClearButton';

const TodoList = (context) => {
	const filteredTodos = TodoManager.filterTodos(context);

	return (
		<Box
			role="TodoList"
			sx={ { alignItems: 'center', flexDirection: 'column',
				display: 'flex', gap: '10px' } }
		> <ClearButton { ...context }/>
			{ filteredTodos.map((todo) => Todo({
				...context,
				data: { todo },
			})) }
		</Box>
	);
};

export default TodoList;
