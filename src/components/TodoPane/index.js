import { React } from 'react';
import UserInput from './UserInput';
import TodoList from './TodoListDisplay/TodoList';
import { Box } from '@mui/material';
import ControlBar from './UserInput/ControlBar';

const TodoPane = (context) =>
	<Box
		role="TodoPane"
		className="column"
		sx={ { width: '100%' } }
	>
		<ControlBar { ...context }/>
		<UserInput { ...context }/>
		<TodoList { ...context }/>
	</Box>;

export default TodoPane;
