import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const FilterButton = (context) => {
	const { actions, data: filter, state } = context;
	const isVariant = filter === state.filter;

	return (
		<Button
			key={ filter }
			role="FilterButton"
			onClick={ () => actions.setFilter(filter) }
			variant={ isVariant ? 'contained' : 'text' }
			sx={ { fontSize: '10px', height: '20px' } }
		>
			{ filter }</Button>);
};

const FilterButtons = (context) =>
	TodoManager.hasTodo(context)
		&& FilterButton(context);

export default FilterButtons;
