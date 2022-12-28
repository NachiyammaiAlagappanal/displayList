import { Checkbox } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';
import CheckIcon from '@mui/icons-material/Check';

const CheckBox = (context) => {
	const { actions } = context;
	const isSelected = TodoManager.hasActiveTodo(context);

	return (
		<Checkbox
			role="checkBox"
			type="checkbox"
			checked={ isSelected }
			color="success"
			checkedIcon={ <CheckIcon/> }
			icon={ <CheckIcon/> }
			onChange={ () => actions.toggleAll(!isSelected) }
			sx={ { Color: 'black', marginTop: '15px' } }
		/>
	);
};

const ToggleAllButton = (context) => TodoManager.hasTodo(context)
&& <CheckBox { ...context }/>;

export default ToggleAllButton;
