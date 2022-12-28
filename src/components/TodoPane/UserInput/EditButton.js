
import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const EditButton = ({ actions, state: { input }}) =>
	<Button
		role="editButton"
		disabled={ TodoManager.hasInput(input) }
		onClick={ () => actions.editTodo() }
		size="large"
		sx={ { Color: 'black', marginTop: '15px' } }
	>EDIT</Button>;

export default EditButton;
