import { Tooltip } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const filterButton = (context) => {
	const { actions, data: filter } = context;

	return (
		TodoManager.hasNoTodos(context)
			? null
			:	<span>
				<Tooltip title="filter">
					<button
						key={ filter }
						role="FilterButton"
						onClick={ () => actions.setFilter(filter) }
					>
						{ filter }</button>
				</Tooltip>	</span>
	);
};

export default filterButton;
