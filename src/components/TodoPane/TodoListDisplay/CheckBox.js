import { Checkbox } from '@mui/material';
import { React } from 'react';

const CheckBox = (context) => {
	const { actions, data: { todo }} = context;
	const { completed } = todo;

	return (
		<Checkbox
			role="CheckBox"
			checked={ completed }
			onChange={ () => actions.toggleTodo(todo) }
		/>
	);
};

export default CheckBox;
