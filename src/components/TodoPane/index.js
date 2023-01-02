import { React } from 'react';
import UserInput from './UserInput';
import TodoList from './TodoListDisplay/TodoList';
import { Box } from '@mui/material';

const TodoPane = (context) =>
	<Box role="TodoPane" className="column gap">
		<UserInput { ...context }/>
		<TodoList { ...context }/>
	</Box>;

export default TodoPane;
