import { Checkbox } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const CheckBox = (context) => {
	const { actions } = context;
	const isSelected = TodoManager.hasActiveTodo(context);

	return (
		<Checkbox
			role="checkBox"
			type="checkbox"
			checked={ isSelected }
			onChange={ () => actions.toggleAll(!isSelected) }
			sx={ { Color: 'black', marginTop: '15px' } }
		/>
	);
};

const ToggleAllButton = (context) => TodoManager.hasTodo(context)
&& <CheckBox { ...context }/>;

export default ToggleAllButton;
