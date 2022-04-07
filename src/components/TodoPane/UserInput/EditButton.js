import { React } from 'react';

const EditButton = ({ actions: { editTodo }}) =>
	<button
		role="editButton"
		onClick={ editTodo }
	>EDIT</button>;

export default EditButton;
