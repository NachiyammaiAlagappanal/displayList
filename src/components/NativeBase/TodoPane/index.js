import { Heading, VStack } from 'native-base';
import { React } from 'react';
import Body from './Body';

const Header = () =>
	<Heading
		size="2xl"
		textAlign="center"
	>
		todos</Heading>;

const TodoPaneFrame = (context) =>
	<VStack
		space={ 6 }
		style={ {	height: '100vh' } }
	>
		<Header { ...context }/>
		<Body { ...context }/>
	</VStack>;

export default TodoPaneFrame;
