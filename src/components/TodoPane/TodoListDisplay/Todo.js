import { Box } from '@mui/material';
import { React } from 'react';
import CheckBox from './CheckBox';
import RemoveButton from './RemoveButton';

const Todo = (context) => {
	const { actions, data: { todo }} = context;
	const { id, text, completed } = todo;
	const style = completed ? 'completedStyle' : 'activeStyle';

	return (
		<Box
			key={ id }
			role="Todo"
			className="sharedStyle"
		><Box component="span"/>
			<Box
				component="span"
				className={ style }
				role="setEditing"
				onClick={ () => actions.setEditing(todo) }
			>	{ text }</Box><Box component="span">
				<RemoveButton { ...context }/><CheckBox { ...context }/></Box>
		</Box>
	);
};

export default Todo;
