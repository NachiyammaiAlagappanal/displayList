import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../../services/TodoManager';
import ClearButton from './ClearButton';

describe('ClearCompleted', () => {
	const context = {
		actions: {
			clearCompleted: jest.fn(),
		},
		state: {
			todos: Symbol('todos'),
		},
	};

	test('enable condition', () => {
		jest.spyOn(TodoManager, 'hasCompletedTodos').mockReturnValue(true);
		const component = render(ClearButton(context))
			.getByRole('ClearCompleted');

		expect(component).toBeInTheDocument();
		expect(component).toHaveTextContent('Clear completed');
		expect(TodoManager.hasCompletedTodos)
			.toHaveBeenCalledWith(context);
	});
	describe('check clear Button in able or in disable condition', () => {
		test('disable condition', () => {
			jest.spyOn(TodoManager, 'hasCompletedTodos').mockReturnValue(false);
			const component = ClearButton(context);

			expect(component).toEqual(false);
			expect(TodoManager.hasCompletedTodos)
				.toHaveBeenCalledWith(context);
		});

		test('check the accessibility of the clickEvent', () => {
			jest.spyOn(TodoManager, 'hasCompletedTodos').mockReturnValue(true);
			const component = render(ClearButton(context))
				.getByRole('ClearCompleted');

			fireEvent.click(component);
			expect(TodoManager.hasCompletedTodos)
				.toHaveBeenCalledWith(context);
			expect(context.actions.clearCompleted).toHaveBeenCalledWith();
		});
	});
});
