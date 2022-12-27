import { Button } from '@mui/material';
import { React } from 'react';

const RemoveButton = (context) => {
	const { data: { todo }} = context;

	return (
		<Button
			role="removeButton"
			onClick={ () => context.actions.removeTodo(todo) }
		>X
		</Button>
	);
};

export default RemoveButton;
