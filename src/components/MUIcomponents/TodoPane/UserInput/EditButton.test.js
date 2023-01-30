import { render, fireEvent } from '@testing-library/react';
import EditButton from './EditButton';
import TodoManager from '../../../services/TodoManager';

describe('Edit the todos', () => {
	const context = {
		actions: {
			editTodo: jest.fn(),
		},
		state: {
			input: Symbol('text'),
		},

	};

	test('edit the Text', () => {
		const component = render(EditButton(context)).getByRole('editButton');

		expect(component).toHaveTextContent('EDIT');
		expect(component).toBeInTheDocument();
	});

	test('check the accessibility of the clickEvent', () => {
		const component = render(EditButton(context)).getByRole('editButton');

		fireEvent.click(component);
		expect(context.actions.editTodo).toHaveBeenCalledWith();
	});

	describe('check add Button in able or disable condition', () => {
		test('disable condition', () => {
			jest.spyOn(TodoManager, 'hasInput').mockReturnValue(true);
			const component = render(EditButton(context))
				.getByRole('editButton');

			expect(component).toBeDisabled();
			expect(TodoManager.hasInput)
				.toHaveBeenCalledWith(context.state.input);
		});
		test('enable condition', () => {
			jest.spyOn(TodoManager, 'hasInput').mockReturnValue(false);
			const component = render(EditButton(context))
				.getByRole('editButton');

			expect(component).not.toBeDisabled();
			expect(TodoManager.hasInput)
				.toHaveBeenCalledWith(context.state.input);
		});
	});
});
