import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const Checkbox = (context) => {
	const { actions } = context;
	const isSelected = TodoManager.hasActiveTodo(context);

	return (
		<input
			role="checkBox"
			type="checkbox"
			checked={ isSelected }
			onChange={ () => actions.toggleAll(!isSelected) }
		/>
	);
};

const ToggleAllButton = (context) => TodoManager.hasTodo(context)
&& Checkbox(context);

export default ToggleAllButton;
