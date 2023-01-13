import { Button } from '@mui/material';
import { React } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const RemoveButton = (context) => {
	const { data: { todo }} = context;

	return (
		<Button
			role="removeButton"
			onClick={ () => context.actions.removeTodo(todo) }
			color="primary"
		><DeleteIcon/>
		</Button>
	);
};

export default RemoveButton;
