/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { Box } from 'native-base';
import { React } from 'react';
import CheckBox from './CheckBox';
import RemoveButton from './RemoveButton';

const Todo = (context) => {
	const { actions, data: { todo }} = context;
	const { id, text } = todo;

	return (
		<Box
			key={ id }
			role="Todo"
			style={ { borderBottom: '1px solid #174772', display: 'flex',
				flexDirection: 'row' } }
		><CheckBox { ...context }/>
			<Box
				style={ { 'text-align': 'left',
					'width': '43vw', 'justifyContent': 'center',
					'marginLeft': '10px' } }
				role="setEditing"
				onPress={ () => actions.setEditing(todo) }
			>{ text }</Box>
			<RemoveButton { ...context }/></Box>
	);
};

export default Todo;
