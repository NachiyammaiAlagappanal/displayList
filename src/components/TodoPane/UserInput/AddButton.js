import { React } from 'react';
import TodoManager from '../../../services/TodoManager';
import { Tooltip } from '@mui/material';

const AddButton = (context) => {
	const { state: { input }} = context;

	return (
		<Tooltip title="add">
			<button
				role="AddButton"
				disabled={ TodoManager.hasInput(input) }
				onClick={ () => TodoManager.addTodo({
					...context,
					data: input,
				}) }
			> +
			</button>
		</Tooltip>
	);
};

export default AddButton;
