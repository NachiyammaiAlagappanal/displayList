import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const CheckBox = (context) => {
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
&& <CheckBox { ...context }/>;

export default ToggleAllButton;
