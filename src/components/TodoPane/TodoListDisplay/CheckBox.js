/* eslint-disable id-length */
import { Checkbox } from '@mui/material';
import { React } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import RadioButtonUncheckedRoundedIcon from
	'@mui/icons-material/RadioButtonUncheckedRounded';

const CheckBox = (context) => {
	const { actions, data: { todo }} = context;
	const { completed } = todo;

	return (
		<Checkbox
			role="CheckBox"
			checked={ completed }
			color="success"
			checkedIcon={ <CheckIcon sx={ { color: '#2e7d32' } }/> }
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
