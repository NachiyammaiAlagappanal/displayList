import { React } from 'react';
import TodoManager from '../../../../services/TodoManager';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from 'native-base';

const EditButton = ({ actions, state: { input }}) =>
	<Button
		role="editButton"
		disabled={ TodoManager.hasInput(input) }
		onPress={ () => actions.editTodo() }
	><EditIcon/></Button>;

export default EditButton;
