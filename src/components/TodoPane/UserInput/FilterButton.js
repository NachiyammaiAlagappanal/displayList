import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const filterButton = (context) => {
	const { actions, data: filter } = context;

	return (
		TodoManager.hasNoTodos(context)
			? null
			:	<span>
				<button
					key={ filter }
					role="FilterButton"
					onClick={ () => actions.setFilter(filter) }
				>
					{ filter }</button>	</span>
	);
};

export default filterButton;
