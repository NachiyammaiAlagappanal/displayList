import { Tooltip } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const ClearButton = (context) => {
	const { actions } = context;
	const isTodoCompleted = TodoManager.hasCompletedTodos(context);

	return isTodoCompleted && <Tooltip title="clear">
		<button
			role="ClearCompleted"
			onClick={ () => actions.clearCompleted() }
		>
			Clear completed
		</button>
	</Tooltip>;
};

export default ClearButton;
