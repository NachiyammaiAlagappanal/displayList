import { React } from 'react';
import TodoManager from '../../../../services/TodoManager';
import { Button, Text } from 'native-base';

const AddButton = (context) => {
	const { actions, state: { input }} = context;

	return (
		<Button
			role="AddButton"
			disabled={ TodoManager.hasInput(input) }
			onPress={ () => actions.addTodo(input) }
			variant="unstyled"
		>
			<Text fontSize="xl">+</Text>
		</Button>
	);
};

export default AddButton;
