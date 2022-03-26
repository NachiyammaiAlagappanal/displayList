import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const ToggleAllButton = (context) => {
	const isSelected = TodoManager.hasActiveCount(context);
	const Checkbox = () =>
		<input
			type="checkbox"
			checked={ isSelected }
			onChange={ () => context.actions.toggleAll(!isSelected) }
		/>;

	return (
		TodoManager.hasNoTodos(context)
			? null
			:	Checkbox()
	);
};

export default ToggleAllButton;
