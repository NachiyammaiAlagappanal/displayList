import { React } from 'react';
import UserInput from './UserInput';
import TodoList from './TodoListDisplay/TodoList';
import ControlBar from './UserInput/ControlBar';
import { Box } from 'native-base';

const TodoPane = (context) =>
	<Box
		role="TodoPane"
		style={ { width: '100%', rowGap: '20px', display: 'flex',
			flexDirection: 'column' } }
	>
		<ControlBar { ...context }/>
		<Box><UserInput { ...context }/>
			<TodoList { ...context }/></Box>
	</Box>;

export default TodoPane;
