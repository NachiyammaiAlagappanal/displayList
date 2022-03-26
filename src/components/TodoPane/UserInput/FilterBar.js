import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const filterButton = (context) => {
	const { actions, data } = context;
	const Button = () =>
		<button
			key={ data.filter }
			onClick={ () => actions.setFilter(data.filter) }
		>
			{ data.filter }</button>;

	return (
		TodoManager.hasNoTodos(context)
			? null
			: Button()
	);
};

const filterBar = (context) => context.config.filters.map((filter) =>
	filterButton({ ...context, data: { filter }}));

export default filterBar;
