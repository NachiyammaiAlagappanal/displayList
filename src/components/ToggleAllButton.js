import { React } from 'react';
import todoManager from '../services/todoManager.js';

const ToggleAllButton = (context) => {
	const { state } = context;
	const isSelected = todoManager.hasActiveCount(state.todos);
	const Checkbox = () =>
		<input
			type="checkbox"
			checked={ isSelected }
			onChange={ () => context.actions.toggleAll(!isSelected) }
		/>;

	return (
		todoManager.hasNoTodos(state.todos)
			? null
			:	Checkbox()
	);
};

export default ToggleAllButton;
