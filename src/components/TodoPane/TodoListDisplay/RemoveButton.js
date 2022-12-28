import { Button } from '@mui/material';
import { React } from 'react';

const RemoveButton = (context) => {
	const { data: { todo }} = context;

	return (
		<Button
			role="removeButton"
			onClick={ () => context.actions.removeTodo(todo) }
			color="error"
		>X
		</Button>
	);
};

export default RemoveButton;
