/* eslint-disable max-lines-per-function */
import { Box } from '@mui/material';
import { React } from 'react';
import CheckBox from './CheckBox';
import RemoveButton from './RemoveButton';

const Todo = (context) => {
	const { actions, data: { todo }, state: { theme }} = context;
	const { id, text, completed } = todo;
	const style = completed ? 'completedStyle' : 'activeStyle';
	const themeColor = theme === 'dark' ? '#174772' : 'lightgray';

	return (
		<Box
			key={ id }
			role="Todo"
			className="row sharedStyle"
			sx={ { borderBottom: `1px solid ${ themeColor }` } }
		><CheckBox { ...context }/>
			<Box
				className={ `text ${ style }` }
				role="setEditing"
				component="span"
				onClick={ () => actions.setEditing(todo) }
				color="text.contrast"
			>{ text }</Box>
			<RemoveButton { ...context }/></Box>
	);
};

export default Todo;
