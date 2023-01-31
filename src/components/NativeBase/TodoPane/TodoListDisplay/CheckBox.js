/* eslint-disable id-length */
import { Checkbox } from '@mui/material';
import { React } from 'react';
import CheckCircleOutlineRoundedIcon from
	'@mui/icons-material/CheckCircleOutlineRounded';
import RadioButtonUncheckedRoundedIcon from
	'@mui/icons-material/RadioButtonUncheckedRounded';

const CheckBox = ({ actions, data: { todo: { completed }, todo }}) =>
	<Checkbox
		role="CheckBox"

		checked={ completed }
		checkedIcon={
			<CheckCircleOutlineRoundedIcon
				color="success"
				sx={ { '&:hover': { color: 'success.main' }} }
			/>
		}
		icon={
			<RadioButtonUncheckedRoundedIcon
				color="text.contrast"
			/>
		}
		onChange={ () => actions.toggleTodo(todo) }
	/>;

export default CheckBox;
