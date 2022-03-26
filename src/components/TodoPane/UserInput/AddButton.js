import { React } from 'react';

const AddButton = (context) => {
	const { state: { input }} = context;

	return (
		<button
			disabled={ input === '' }
			onClick={ () => context.actions.addTodo() }
		> +
		</button>
	);
};

export default AddButton;
