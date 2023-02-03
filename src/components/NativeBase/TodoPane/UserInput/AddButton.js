import { React } from 'react';
import TodoManager from '../../../../services/TodoManager';
import AddIcon from '@mui/icons-material/Add';
import { Button } from 'native-base';

const AddButton = (context) => {
	const { actions, state: { input }} = context;

	return (
		<Button
			role="AddButton"
			disabled={ TodoManager.hasInput(input) }
			onPress={ () => actions.addTodo(input) }
			variant="unstyled"
		>
			<AddIcon
				color="text"
				sx={ { '&:hover': { color: 'success.main' }} }
			/>
		</Button>
	);
};

export default AddButton;
