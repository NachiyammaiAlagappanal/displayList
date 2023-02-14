import { Heading, VStack } from 'native-base';
import { React } from 'react';
import Body from './Body';

const Header = () =>
	<Heading
		size="2xl"
		textAlign="center"
	>
		todos</Heading>;

const TodoPane = (context) =>
	<VStack
		space={ 6 }
		style={ {	height: '100vh', width: '50%' } }
	>
		<Header { ...context }/>
		<Body { ...context }/>
	</VStack>;

export default TodoPane;
