import filterButton from './FilterButton.js';
import TodoManager from '../../../services/TodoManager';
import { render, fireEvent } from '@testing-library/react';

const filter = ['all', 'active', 'completed'];

const context = {
	actions: {
		setFilter: jest.fn(),
	},
	state: {
		todos: [],
	},
};

describe('filterBar', () => {
	test('When filterBar is not present for no todos', () => {
		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(true);
		const FilterButton = filterButton({ ...context, data: filter });

		expect(TodoManager.hasNoTodos)
			.toHaveBeenCalledWith({ ...context, data: filter });
		expect(FilterButton).not.toBeInTheDocument();
	});
	test('When filterBar is present', () => {
		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(false);
		const FilterButton = render(filterButton({ ...context,
			data: filter })).getByRole('FilterButton');

		expect(TodoManager.hasNoTodos)
			.toHaveBeenCalledWith({ ...context, data: filter });
		expect(FilterButton).toBeInTheDocument();
	});
	test('display and access the filter Buttons', () => {
		jest.spyOn(TodoManager, 'hasNoTodos').mockReturnValue(false);
		const FilterButton = render(filterButton({ ...context,
			data: filter })).getByRole('FilterButton');

		fireEvent.click(FilterButton);

		expect(context.actions.setFilter)
			.toHaveBeenCalledWith(filter);
		expect(FilterButton).toBeInTheDocument();
	});
});
