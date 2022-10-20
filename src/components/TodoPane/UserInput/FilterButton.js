import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const Button = (context) => {
	const { actions, data: filter } = context;

	return (
		<button
			key={ filter }
			role="FilterButton"
			onClick={ () => actions.setFilter(filter) }
		>
			{ filter }</button>);
};

const FilterButton = (context) =>
	TodoManager.hasTodo(context)
		&& Button(context);

export default FilterButton;
