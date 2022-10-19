import { React } from 'react';

const CheckBox = (context) => {
	const { actions, data: { todo }} = context;
	const { completed } = todo;

	return (
		<input
			role="CheckBox"
			type="checkbox"
			checked={ completed }
			onChange={ () => actions.toggleTodo(todo) }
		/>
	);
};

export default CheckBox;
