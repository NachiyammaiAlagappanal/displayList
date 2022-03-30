import { React } from 'react';

const AddButton = (context) => {
	const { actions, state: { input }} = context;

	return (
		<button
			disabled={ input === '' }
			onClick={ () => actions.addTodo() }
		> +
		</button>
	);
};

export default AddButton;
