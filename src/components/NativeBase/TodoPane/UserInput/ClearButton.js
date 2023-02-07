import { Button, Tooltip } from 'native-base';
import { React } from 'react';
import TodoManager from '../../../../services/TodoManager';

const ClearButton = (context) => {
	const { actions } = context;
	const hasCompletedTodos = TodoManager.hasCompletedTodos(context);

	return hasCompletedTodos && <Tooltip label="clear">
		<Button
			role="ClearCompleted"
			onClick={ () => actions.clearCompleted() }
			size="sm"
			variant="outline"
		>
			Clear completed
		</Button>
	</Tooltip>;
};

export default ClearButton;
