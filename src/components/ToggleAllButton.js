import { React } from 'react';
import context from '../core/context.js';
const getActiveCount = ({ todos }) =>
	todos.filter((todo) => !todo.completed).length;

const ToggleAllButton = () => {
	const isSelected = getActiveCount(context.state) === 0;

	return (
		<input
			type="checkbox"
			checked={ isSelected }
			onChange={ () => context.actions.toggleAll(!isSelected) }
		/>
	);
};

export default ToggleAllButton;
