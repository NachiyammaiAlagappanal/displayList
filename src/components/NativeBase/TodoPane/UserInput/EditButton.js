import { React } from 'react';
import TodoManager from '../../../../services/TodoManager';
import { Button } from 'native-base';

const EditButton = ({ actions, state: { input }}) =>
	<Button
		role="editButton"
		isDisabled={ TodoManager.hasInput(input) }
		onPress={ () => actions.editTodo() }
		size="sm"
	>Edit</Button>;

export default EditButton;
