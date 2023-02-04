import { HStack } from 'native-base';
import { React } from 'react';
import TaskPaneFrame from './TaskPaneFrame';
import TodoPaneFrame from './TodoPaneFrame';

const Frame = (context) =>
	<HStack
		style={ { height: '100vh' } }
	>
		<TaskPaneFrame { ...context }/>
		<TodoPaneFrame { ...context }/>
	</HStack>;

export default Frame;
