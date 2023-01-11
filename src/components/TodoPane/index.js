import { React } from 'react';
import UserInput from './UserInput';
import TodoList from './TodoListDisplay/TodoList';
import { Box } from '@mui/material';
import ControlBar from './UserInput/ControlBar';

const TodoPane = (context) =>
	<Box>
		<ControlBar { ...context }/>
		<Box
			role="TodoPane"
			className="column"
		>
			<UserInput { ...context }/>
			<TodoList { ...context }/>
		</Box></Box>;

export default TodoPane;
