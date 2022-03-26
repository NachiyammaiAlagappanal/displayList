import { React } from 'react';

const EditButton = (context) => {
	const { state: { input }, actions } = context;

	return (
		<button
			disabled={ input === '' }
			onClick={ actions.editTodo }
		>EDIT</button>
	);
};

export default EditButton;
