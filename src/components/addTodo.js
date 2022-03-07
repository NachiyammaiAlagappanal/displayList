import { React } from 'react';

const addTodo = (context) =>
	<button
		onClick={ () => context.actions.addTodo() }
	> Add
	</button>;

export default addTodo;
