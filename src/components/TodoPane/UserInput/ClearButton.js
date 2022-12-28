import { Button, Tooltip } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const ClearButton = (context) => {
	const { actions } = context;
	const hasCompletedTodos = TodoManager.hasCompletedTodos(context);

	return hasCompletedTodos && <Tooltip title="clear">
		<Button
			role="ClearCompleted"
			onClick={ () => actions.clearCompleted() }
			size="small"
			variant="contained"
			color="success"
			sx={ { width: '25%' } }
		>
			Clear completed
		</Button>
	</Tooltip>;
};

export default ClearButton;
