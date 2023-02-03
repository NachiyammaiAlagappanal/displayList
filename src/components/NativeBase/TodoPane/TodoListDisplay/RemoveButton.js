import { Button } from 'native-base';
import { React } from 'react';

const RemoveButton = (context) => {
	const { data: { todo }} = context;

	return (
		<Button
			role="removeButton"
			variant="unstyled"
			onPress={ () => context.actions.removeTodo(todo) }
		>
			X	</Button>
	);
};

export default RemoveButton;
