import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const RemoveButton = (context) => {
	const { data: { todo }} = context;

	return (
		<button
			role="removeButton"
			onClick={ () => TodoManager.removeTodo(context, { todo }) }
		>X
		</button>
	);
};

export default RemoveButton;
