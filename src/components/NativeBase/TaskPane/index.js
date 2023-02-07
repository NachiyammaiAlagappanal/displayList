import { Heading, VStack } from 'native-base';
import { React } from 'react';
import Body from './Body.js';

const TaskPane = (context) =>
	<VStack
		space={ 6 }
		width="50%"
	>
		<Heading
			size="2xl"
			textAlign="center"
		>tasks</Heading>
		<Body { ...context }/>
	</VStack>;

export default TaskPane;
