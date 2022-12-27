import { React } from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../../services/TodoManager';

const button = (context) => {
	const { actions, data: filter } = context;

	return (
		<Button
			key={ filter }
			role="FilterButton"
			onClick={ () => actions.setFilter(filter) }
		>
			{ filter }</Button>);
};

const FilterButton = (context) =>
	TodoManager.hasTodo(context)
		&& button(context);

export default FilterButton;
