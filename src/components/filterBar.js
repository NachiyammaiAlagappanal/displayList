import { React } from 'react';
import todoManager from '../services/todoManager';

const filterButton = (context) => {
	const { state, actions, data } = context;
	const Button = () =>
		<button
			key={ data.filter }
			onClick={ () => actions.setFilter(data.filter) }
		>
			{ data.filter }</button>;

	return (
		todoManager.hasNoTodos(state.todos)
			? null
			: Button()
	);
};

const filterBar = (context) => context.config.filters.map((filter) =>
	filterButton({ ...context, data: { filter }}));

export default filterBar;
