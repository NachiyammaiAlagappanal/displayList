import { React } from 'react';
import UserInput from './UserInput';
import TodoList from './TodoListDisplay/TodoList';
import { Box, Toolbar } from '@mui/material';
import ControlBar from './UserInput/ControlBar';

const TodoPane = (context) =>
	<Box>
		<Toolbar sx={ { justifyContent: 'center' } }>Todos</Toolbar>
		<Box
			role="TodoPane"
			className="column"
		>
			<Box sx={ { height: '50px' } }>
				<ControlBar { ...context }/></Box>
			<UserInput { ...context }/>
			<TodoList { ...context }/>
		</Box>
	</Box>;

export default TodoPane;
