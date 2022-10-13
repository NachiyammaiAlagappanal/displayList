import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const AddButton = (context) => {
	const { actions, state: { input }} = context;

	return (
		<button
			role="AddButton"
			disabled={ TodoManager.hasInput(input) }
			onClick={ () => actions.addTodo(input) }
		> +
		</button>
	);
};

export default AddButton;
