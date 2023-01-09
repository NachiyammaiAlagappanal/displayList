import { Button } from '@mui/material';
import { React } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const RemoveButton = (context) => {
	const { data: { todo }} = context;

	return (
		<Button
			role="removeButton"
			onClick={ () => context.actions.removeTodo(todo) }
			color="error"
		><ClearRoundedIcon/>
		</Button>
	);
};

export default RemoveButton;
