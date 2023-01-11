import { Box, Checkbox, Tooltip } from '@mui/material';
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
			/></Tooltip>
	);
};

const ToggleAllButton = (context) =>
	<Box className="size margin">
		{TodoManager.hasTodo(context)
	&& <CheckBox { ...context }/>}</Box>;

export default ToggleAllButton;
