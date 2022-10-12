import { Tooltip } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const ClearButton = ({ state, actions }) => {
	const isTodoCompleted = TodoManager.hasCompletedTodos(state.todos);

	return isTodoCompleted && <Tooltip title="clear">
		<button
			role="ClearCompleted"
			onClick={ () => actions.ClearCompleted() }
		>
			Clear completed
		</button>
	</Tooltip>;
};

export default ClearButton;
