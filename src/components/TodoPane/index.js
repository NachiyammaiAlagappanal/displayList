import { React } from 'react';
import UserInput from './UserInput';
import TodoList from './TodoListDisplay/TodoList';
import { Box, Toolbar } from '@mui/material';

const TodoPane = (context) =>
	<Box role="TodoPane" className="TodoPane">
		<Toolbar className="center">
			TODO</Toolbar>
		<UserInput { ...context }/>
		<TodoList { ...context }/>
	</Box>;

export default TodoPane;
