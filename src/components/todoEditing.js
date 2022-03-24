import { React } from 'react';

const todoEditing = (context) =>
	<button
		disabled={ context.state.input === '' }
		onClick={ context.actions.editTodo }
	>EDIT</button>;

export default todoEditing;
