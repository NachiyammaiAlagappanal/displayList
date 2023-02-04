import { Heading, VStack } from 'native-base';
import { React } from 'react';
import TaskPane from './TaskPane';

const TaskPaneFrame = (context) =>
	<VStack
		space={ 6 }
		width="50%"
	>
		<Heading
			size="2xl"
			textAlign="center"
		>tasks</Heading>
		<TaskPane { ...context }/>
	</VStack>;

export default TaskPaneFrame;
