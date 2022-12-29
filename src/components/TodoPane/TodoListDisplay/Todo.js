/* eslint-disable react/jsx-indent */
/* eslint-disable max-lines-per-function */
import { Box, Paper } from '@mui/material';
import { React } from 'react';
import CheckBox from './CheckBox';
import RemoveButton from './RemoveButton';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

const Todo = (context) => {
	const { actions, data: { todo }} = context;
	const { id, text, completed } = todo;
	const style = completed ? 'completedStyle' : 'activeStyle';

	return (
		<Box
			key={ id }
			role="Todo"
			className="sharedStyle"
		><Box component="span"><Paper>
				<CircleRoundedIcon sx={ { fontSize: 'small' } }/>
				<Box
					component="span"
					className={ style }
					role="setEditing"
					onClick={ () => actions.setEditing(todo) }
				>	{ text }</Box></Paper>
			<Box component="span"><CheckBox { ...context }/>
				<RemoveButton { ...context }/></Box></Box></Box>
	);
};

export default Todo;
