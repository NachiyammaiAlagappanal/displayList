import { React } from 'react';

const EditButton = ({ actions }) =>
	<button
		role="editButton"
		onClick={ () => actions.editTodo() }
	>EDIT</button>;

export default EditButton;
