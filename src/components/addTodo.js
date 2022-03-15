import { React } from 'react';

const addTodo = (context) =>
	<button
		disabled={ context.state.input === '' }
		onClick={ () => context.actions.addTodo() }
	> +
	</button>;

export default addTodo;
