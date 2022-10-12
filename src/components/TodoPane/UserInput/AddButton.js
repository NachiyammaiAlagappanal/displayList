import { React } from 'react';
import TodoManager from '../../../services/TodoManager';
import { Tooltip } from '@mui/material';
import TodoBackend from '../../../services/TodoBackend';

const AddButton = (context) => {
	const { actions, state: { input }} = context;

	return (
		<Tooltip title="add">
			<button
				role="AddButton"
				disabled={ TodoManager.hasInput(input) }
				onClick={ async () => {
					await TodoBackend.create({ text: input });
					return actions.addTodo();
				} }
			> +
			</button>
		</Tooltip>
	);
};

export default AddButton;
