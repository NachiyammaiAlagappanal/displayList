import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const AddButton = (context) => {
	const { actions, state: { input }} = context;

	return (
		<Button
			role="AddButton"
			disabled={ TodoManager.hasInput(input) }
			onClick={ () => actions.addTodo(input) }
		> +
		</Button>
	);
};

export default AddButton;
