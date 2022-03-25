import { React } from 'react';
import todoManager from '../services/todoManager.js';

const ClearButton = (context) => {
	const { state } = context;
	const { todos } = state;

	return todoManager.hasNoTodos(todos)
		? null
		:	<button onClick={ () => context.actions.ClearCompleted() }>
			Clear completed
		</button>;
};

export default ClearButton;
