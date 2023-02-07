import { HStack } from 'native-base';
import { React } from 'react';
import TaskPane from './TaskPane';
import TodoPane from './TodoPane';

const Web = (context) =>
	<HStack
		style={ { height: '100vh' } }
	>
		<TaskPane { ...context }/>
		<TodoPane { ...context }/>
	</HStack>;

export default Web;
