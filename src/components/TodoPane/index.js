import { React } from 'react';
import UserInput from './UserInput';
import TodoList from './TodoListDisplay/TodoList';
import { Box, Toolbar } from '@mui/material';
import ControlBar from './UserInput/ControlBar';

const TodoPane = (context) =>
	<Box>
		<Toolbar>Todos</Toolbar>
		<Box
			role="TodoPane"
			className="column"
			sx={ { width: '90%' } }
		>
			<div style={ { height: '50px' } }>
				<ControlBar { ...context }/></div>
			<UserInput { ...context }/>
			<TodoList { ...context }/>
		</Box>
	</Box>;

export default TodoPane;
