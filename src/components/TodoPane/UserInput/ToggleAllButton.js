import { Checkbox, Tooltip } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';
import CheckIcon from '@mui/icons-material/Check';

const CheckBox = (context) => {
	const { actions } = context;
	const isSelected = TodoManager.hasActiveTodo(context);

	return (
		<Tooltip title="Toggle All">
			<Checkbox
				role="checkBox"
				type="checkbox"
				checked={ isSelected }
				checkedIcon={ <CheckIcon color="success"/> }
				icon={ <CheckIcon color="secondary"/> }
				onChange={ () => actions.toggleAll(!isSelected) }
				sx={ { marginTop: '15px' } }
			/></Tooltip>
	);
};

const ToggleAllButton = (context) =>
	<div style={ { width: '50px', height: '50px' } }>
		{TodoManager.hasTodo(context)
	&& <CheckBox { ...context }/>}</div>;

export default ToggleAllButton;
