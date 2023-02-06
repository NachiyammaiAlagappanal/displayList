/* eslint-disable no-console */
import { React } from 'react';
import TodoManager from '../../../../services/TodoManager';
import { Checkbox, Tooltip } from 'native-base';

const ToggleAllButton = (context) => {
	const { actions } = context;
	const isSelected = TodoManager.hasActiveTodo(context);

	console.log(isSelected);

	const available = TodoManager.hasTodo(context)
		? { visibility: 'visible' }
		: { visibility: 'hidden' };

	return (
		<Tooltip label="Toggle All">
			<Checkbox
				role="checkBox"
				accessibilityLabel="toggleAll"
				isChecked={ isSelected }
				style={ { margin: '10px', ...available } }
				onChange={ () => actions.toggleAll(!isSelected) }
			/></Tooltip>
	);
};

export default ToggleAllButton;
