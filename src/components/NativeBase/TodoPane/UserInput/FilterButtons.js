
import { Button } from 'native-base';
import { React } from 'react';
import TodoManager from '../../../../services/TodoManager';

const FilterButton = (context) => {
	const { actions, data: filter, state } = context;
	const isVariant = filter === state.filter;

	return (
		<Button
			key={ filter }
			role="FilterButton"
			onPress={ () => actions.setFilter(filter) }
			variant={ isVariant ? 'solid' : 'outline' }
			size="sm"
		>
			{ filter }</Button>);
};

const FilterButtons = (context) =>
	TodoManager.hasTodo(context)
		&& FilterButton(context);

export default FilterButtons;
