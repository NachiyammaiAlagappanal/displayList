import { HStack } from 'native-base';
import { React } from 'react';
import TaskPane from './TaskPane/index.js';
import TodoPane from './TodoPane/index.js';

const Web = (context) =>
	<HStack
		style={ { height: '100vh' } }
	>
		<TaskPane { ...context }/>
		<TodoPane { ...context }/>
	</HStack>;

export default Web;
