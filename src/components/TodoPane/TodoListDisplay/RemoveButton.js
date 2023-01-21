import { Button } from '@mui/material';
import { React } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const RemoveButton = (context) => {
	const { data: { todo }, state: { remove }} = context;
	const removeColor = remove ? 'light' : 'text';

	return (
		<Button
			role="removeButton"
			onClick={ () => context.actions.removeTodo(todo) }
		>
			<ClearRoundedIcon
				color={ removeColor }
				sx={ { '&:hover': { color: 'error.main' }} }
			/>
		</Button>
	);
};

export default RemoveButton;
