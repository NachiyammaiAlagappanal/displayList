/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import context from '../core/context';
import todoManager from '../services/todoManager.js';

const ClearButton = () => {
	const { todos } = context.state;
	const noCompletedList = todoManager.getActiveCount(todos) === 0;

	return noCompletedList
		? null
		:	<button
			onClick={ context.actions.ClearCompleted }
		  >Clear completed
		</button>;
};

export default ClearButton;
