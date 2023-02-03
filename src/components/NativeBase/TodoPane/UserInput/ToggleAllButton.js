import { React } from 'react';
import TodoManager from '../../../../services/TodoManager';
import { Checkbox, Tooltip } from 'native-base';

const CheckBox = (context) => {
	const { actions } = context;
	const isSelected = TodoManager.hasActiveTodo(context);

	const available = TodoManager.hasTodo(context)
		? { visibility: 'visible' }
		: { visibility: 'hidden' };

	return (
		<Tooltip label="Toggle All">
			<Checkbox
				role="checkBox"
				type="checkbox"
				checked={ isSelected }
				style={ { margin: '10px', ...available } }
				onChange={ () => actions.toggleAll(!isSelected) }
			/></Tooltip>
	);
};

const ToggleAllButton = (context) => <CheckBox { ...context }/>;

export default ToggleAllButton;
