
import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../../services/TodoManager';
import EditIcon from '@mui/icons-material/Edit';

const EditButton = ({ actions, state: { input }}) =>
	<Button
		role="editButton"
		disabled={ TodoManager.hasInput(input) }
		onClick={ () => actions.editTodo(input) }
	><EditIcon/></Button>;

export default EditButton;
