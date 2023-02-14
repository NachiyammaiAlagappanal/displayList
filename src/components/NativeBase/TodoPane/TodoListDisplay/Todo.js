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
				style={ { textAlign: 'left',
					justifyContent: 'center',
					marginLeft: '10px' } }
				flexGrow="1"
				role="setEditing"
				onClick={ () => actions.setEditing(todo) }
			>{ text }</Box><RemoveButton { ...context }/></Box>
	);
};

export default Todo;
