import { Tooltip } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const EditButton = (context) => {
	const { state: input } = context;

	return <Tooltip title="edit">
		<button
			role="editButton"
			disabled={ TodoManager.hasInput(input) }
			onClick={ () => TodoManager.editTodo(context) }
		>EDIT</button>
	</Tooltip>;
};

export default EditButton;
