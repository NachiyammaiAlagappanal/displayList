import { Button } from '@mui/material';
import { React } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const RemoveButton = (context) => {
	const { data: { todo }} = context;

	return (
		<Button
			role="removeButton"
			onClick={ () => context.actions.removeTodo(todo) }
			sx={ { color: '#ecb0b0' } }
		><ClearRoundedIcon/>
		</Button>
	);
};

export default RemoveButton;
