import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const Button = (context) => {
	const { actions } = context;

	return (
		<button
			role="ClearCompleted"
			onClick={ () => actions.ClearCompleted() }
		>
			Clear completed
		</button>
	);
}
;

const ClearButton = (context) => {
	const noCompletedCount = TodoManager.hasCompletedCount(context.state.todos);

	return noCompletedCount
		? null
		: Button(context);
};

export default ClearButton;
