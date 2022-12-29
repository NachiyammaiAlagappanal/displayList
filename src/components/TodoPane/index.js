import { React } from 'react';
import UserInput from './UserInput';
import TodoList from './TodoListDisplay/TodoList';
import { Box } from '@mui/material';

const TodoPane = (context) =>
	<Box role="TodoPane">
		<Box
			sx={ { display: 'flex', flexDirection: 'column', rowGap: '30px' } }
		>
			<UserInput { ...context }/>
			<TodoList { ...context }/>
		</Box>
	</Box>;

export default TodoPane;
