/* eslint-disable max-lines-per-function */
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
			className="row sharedStyle"
		>
			<Box className="size">
				<CheckBox { ...context }/></Box>
			<Box
				className={ `text ${ style }` }
				role="setEditing"
				component="span"
				onClick={ () => actions.setEditing(todo) }
				color="text.primary"
			>{ text }</Box>
			<RemoveButton { ...context }/></Box>
	);
};

export default Todo;
