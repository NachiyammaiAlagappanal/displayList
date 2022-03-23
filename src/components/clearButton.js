import { React } from 'react';
import todoManager from '../services/todoManager.js';

const ClearButton = (context) => {
	const { state } = context;
	const { todos } = state;
	const noCompletedList = todoManager.getActiveCount(todos) === 0;

	return (
		noCompletedList
			? null
			:	<button onClick={ () => context.actions.ClearCompleted }>
				Clear completed
			</button>
	);
};

export default ClearButton;
