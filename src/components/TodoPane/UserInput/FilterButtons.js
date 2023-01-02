import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const FilterButton = (context) => {
	const { actions, data: filter } = context;

	return (
		<Button
			key={ filter }
			role="FilterButton"
			onClick={ () => actions.setFilter(filter) }
			variant="text"
			sx={ { fontSize: '10px' } }
		>
			{ filter }</Button>);
};

const FilterButtons = (context) =>
	TodoManager.hasTodo(context)
		&& FilterButton(context);

export default FilterButtons;
