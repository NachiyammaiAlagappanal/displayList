import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';
import AddIcon from '@mui/icons-material/Add';

const AddButton = (context) => {
	const { actions, state: { input }} = context;

	return (
		<Button
			role="AddButton"
			disabled={ TodoManager.hasInput(input) }
			onClick={ () => actions.addTodo(input) }
			sx={ { marginTop: '17px', color: 'white' } }
		><AddIcon sx={ { backgroundColor: 'primary.main' } }/>
		</Button>
	);
};

export default AddButton;
