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
				color="success"
				checkedIcon={ <CheckIcon sx={ { color: '#2e7d32' } }/> }
				icon={ <CheckIcon/> }
				onChange={ () => actions.toggleAll(!isSelected) }
				sx={ { Color: 'black', marginTop: '15px' } }
			/></Tooltip>
	);
};

const ToggleAllButton = (context) => TodoManager.hasTodo(context)
&& <CheckBox { ...context }/>;

export default ToggleAllButton;
