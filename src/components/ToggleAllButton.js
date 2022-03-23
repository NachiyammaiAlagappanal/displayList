import { React } from 'react';
import todoManager from '../services/todoManager.js';

const ToggleAllButton = (context) => {
	const { state } = context;
	const isSelected = todoManager.getActiveCount(state.todos) === 0;
	const noToggleButton = todoManager.getTodosCount(state.todos) === 0;
	const Checkbox = () =>
		<input
			type="checkbox"
			checked={ isSelected }
			onChange={ () => context.actions.toggleAll(!isSelected) }
		/>;

	return noToggleButton
		? null
		:	Checkbox();
};

export default ToggleAllButton;
