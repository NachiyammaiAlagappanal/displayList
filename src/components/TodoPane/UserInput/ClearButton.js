import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const ClearButton = (context) => {
	const { actions } = context;

	return TodoManager.hasNoTodos(context)
		? null
		:	<button onClick={ () => actions.ClearCompleted() }>
			Clear completed
		</button>;
};

export default ClearButton;
