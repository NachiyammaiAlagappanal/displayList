import { React } from 'react';
import UserInput from './UserInput';
import TodoList from './TodoListDisplay/TodoList';
import ControlBar from './UserInput/ControlBar';
import { Box, VStack } from 'native-base';

const TodoPane = (context) =>
	<VStack
		role="TodoPane"
		style={ { width: '100%', display: 'flex',
			flexDirection: 'column' } }
		space={ 10 }
	>
		<ControlBar { ...context }/>
		<Box><UserInput { ...context }/>
			<TodoList { ...context }/></Box>
	</VStack>;

export default TodoPane;
