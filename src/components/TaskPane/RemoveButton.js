import { Button } from '@mui/material';
import { React } from 'react';
const RemoveButton = (context) => {
	const { data: task } = context;

	return (
		<Button
			variant="contained"
			color="error"
			role="removeButton"
			onClick={ () => context.actions.removeTask(task) }
		>
			X</Button>
	);
};

export default RemoveButton;
