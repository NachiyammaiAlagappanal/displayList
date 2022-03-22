import { React } from 'react';
import context from '../core/context';
import todoManager from '../services/todoManager.js';
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
const ClearButton = () => {
	const { todos } = context.state;
	const noCompletedList = todoManager.getActiveCount(todos) === 0;

	return (
		noCompletedList
			? null
			:	<button
					onClick={ context.actions.ClearCompleted }
			  >Clear completed
			</button>
	);
};

export default ClearButton;
