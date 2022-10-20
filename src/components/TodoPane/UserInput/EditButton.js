
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const EditButton = (context) => {
	const { state: input } = context;

	return (
		<button
			role="editButton"
			disabled={ TodoManager.hasInput(input) }
			onClick={ () => TodoManager.editTodo(context) }
		>EDIT</button>
	);
};

export default EditButton;
