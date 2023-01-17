/* eslint-disable id-length */
import { Box, Checkbox } from '@mui/material';
import { React } from 'react';
import CheckCircleOutlineRoundedIcon from
	'@mui/icons-material/CheckCircleOutlineRounded';
import RadioButtonUncheckedRoundedIcon from
	'@mui/icons-material/RadioButtonUncheckedRounded';

const CheckBox = ({ actions, data: { todo: { completed }, todo }}) =>
	<Box className="size">
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
					color="text"
				/>
			}
			onChange={ () => actions.toggleTodo(todo) }
		/></Box>;

export default CheckBox;
