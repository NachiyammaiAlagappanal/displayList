
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const EditButton = ({ actions, state: { input }}) =>
	<button
		role="editButton"
		disabled={ TodoManager.hasInput(input) }
		onClick={ () => actions.editTodo() }
	>EDIT</button>;

export default EditButton;
