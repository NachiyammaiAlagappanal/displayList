import { React } from 'react';

const RemoveButton = (context) => {
	const { data: { todo }} = context;

	return (
		<button
			role="removeButton"
			onClick={ () => context.actions.removeTodo(todo) }
		>X
		</button>
	);
};

export default RemoveButton;
