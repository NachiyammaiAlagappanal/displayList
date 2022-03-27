import { React } from 'react';

const EditButton = ({ actions: { editTodo }}) =>
	<button
		onClick={ editTodo }
	>EDIT</button>;

export default EditButton;
