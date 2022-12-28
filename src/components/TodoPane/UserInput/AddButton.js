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
			size="large"
			variant="filled"
			sx={ { Color: 'black', marginTop: '15px' } }
		> +
		</Button>
	);
};

export default AddButton;
