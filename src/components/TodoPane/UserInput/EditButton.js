import { Tooltip } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const EditButton = ({ actions, state: { input }}) =>
	<Tooltip title="edit">
		<button
			role="editButton"
			disabled={ TodoManager.hasInput(input) }
			onClick={ () => actions.editTodo() }
		>EDIT</button>
	</Tooltip>;

export default EditButton;
