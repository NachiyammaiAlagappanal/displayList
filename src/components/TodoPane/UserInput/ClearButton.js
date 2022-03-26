import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const ClearButton = (context) => (TodoManager.hasNoTodos(context)
	? null
	:	<button onClick={ () => context.actions.ClearCompleted() }>
		Clear completed
	</button>);

export default ClearButton;
