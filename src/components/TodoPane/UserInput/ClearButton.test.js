import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../../services/TodoManager';
import ClearButton from './ClearButton';

describe('ClearCompleted', () => {
	const context = {
		actions: {
			ClearCompleted: jest.fn(),
		},
		state: {
			todos: Symbol('todos'),
		},
	};

	test('disable condition', () => {
		jest.spyOn(TodoManager, 'hasCompletedCount').mockReturnValue(true);
		const component = ClearButton(context);

		expect(component).not.toBeInTheDocument();
		expect(TodoManager.hasCompletedCount)
			.toHaveBeenCalledWith(context.state.todos);
	});
	describe('check clear Button in able or in disable condition', () => {
		test('enable condition', () => {
			jest.spyOn(TodoManager, 'hasCompletedCount').mockReturnValue(false);
			const component = render(ClearButton(context))
				.getByRole('ClearCompleted');

			expect(component).toBeInTheDocument();
			expect(component).toHaveTextContent('Clear completed');
			expect(TodoManager.hasCompletedCount)
				.toHaveBeenCalledWith(context.state.todos);
		});

		test('check the accessibility of the clickEvent', () => {
			jest.spyOn(TodoManager, 'hasCompletedCount').mockReturnValue(false);
			const component = render(ClearButton(context))
				.getByRole('ClearCompleted');

			fireEvent.click(component);
			expect(TodoManager.hasCompletedCount)
				.toHaveBeenCalledWith(context.state.todos);
			expect(context.actions.ClearCompleted).toHaveBeenCalledWith();
		});
	});
});
