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
			className="row sharedStyle"
			sx={ { alignItems: 'center' } }
		><CheckBox { ...context }/>
			<Paper sx={ { minWidth: '100px', backgroundColor: '#f0c83ffa' } }>
				<Box
					className={ style }
					role="setEditing"
					component="span"
					onClick={ () => actions.setEditing(todo) }
				>{ text }</Box></Paper><RemoveButton { ...context }/></Box>
	);
};

export default Todo;
