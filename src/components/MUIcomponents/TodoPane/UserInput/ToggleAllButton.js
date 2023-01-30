import { Checkbox, Tooltip } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../../services/TodoManager';
import CheckIcon from '@mui/icons-material/Check';

const CheckBox = (context) => {
	const { actions } = context;
	const isSelected = TodoManager.hasActiveTodo(context);

	const available = TodoManager.hasTodo(context)
		? { visibility: 'visible' }
		: { visibility: 'hidden' };

	return (
		<Tooltip title="Toggle All">
			<Checkbox
				role="checkBox"
				type="checkbox"
				checked={ isSelected }
				sx={ available }
				checkedIcon={ <CheckIcon color="success"/> }
				icon={ <CheckIcon color="text.contrast"/> }
				onChange={ () => actions.toggleAll(!isSelected) }
			/></Tooltip>
	);
};

const ToggleAllButton = (context) => <CheckBox { ...context }/>;

export default ToggleAllButton;
