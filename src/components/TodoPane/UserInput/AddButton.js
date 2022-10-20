import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const AddButton = (context) => {
	const { state: { input }} = context;

	return (
		<button
			role="AddButton"
			disabled={ TodoManager.hasInput(input) }
			onClick={ () => TodoManager.addTodo({
				...context,
				data: input,
			}) }
		> +
		</button>
	);
};

export default AddButton;
