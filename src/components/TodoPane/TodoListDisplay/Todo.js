/* eslint-disable react/jsx-indent */
/* eslint-disable max-lines-per-function */
import { Box, Paper } from '@mui/material';
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
			sx={ { display: 'flex', flexDirection: 'row' } }
		>	<CheckBox { ...context }/>
			<Paper
				elevation={ 0 }
				sx={ { minWidth: '100px' } }
				autoFocus={ true }
			>
				<Box
					className={ style }
					role="setEditing"
					component="span"

					onClick={ () => actions.setEditing(todo) }
				>{ text }</Box></Paper>
			<RemoveButton { ...context }/></Box>
	);
};

export default Todo;
