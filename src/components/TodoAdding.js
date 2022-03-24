import { React } from 'react';

const TodoAdding = (context) => {
	const { state } = context;

	return (
		<button
			disabled={ state.input === '' }
			onClick={ () => context.actions.addTodo() }
		> +
		</button>
	);
};

export default TodoAdding;
