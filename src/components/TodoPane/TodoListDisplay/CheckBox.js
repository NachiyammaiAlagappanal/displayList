/* eslint-disable id-length */
import { Checkbox } from '@mui/material';
import { React } from 'react';
import CheckCircleOutlineRoundedIcon from
	'@mui/icons-material/CheckCircleOutlineRounded';
import RadioButtonUncheckedRoundedIcon from
	'@mui/icons-material/RadioButtonUncheckedRounded';

const CheckBox = (context) => {
	const { actions, data: { todo: { completed }, todo }} = context;

	return (
		<Checkbox
			role="CheckBox"
			checked={ completed }
			checkedIcon={
				<CheckCircleOutlineRoundedIcon
					sx={ { color: 'green' } }
				/>
			}
			icon={
				<RadioButtonUncheckedRoundedIcon
					sx={ { color: 'lightGrey' } }
				/>
			}
			onChange={ () => actions.toggleTodo(todo) }
		/>
	);
};

export default CheckBox;
