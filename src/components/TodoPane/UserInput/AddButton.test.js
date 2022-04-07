import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../../services/TodoManager';
import AddButton from './AddButton';

describe('Add the text to the Todos', () => {
	const context = {
		actions: {
			addTodo: jest.fn(),
		},
		state: {
			input: Symbol('text'),
		},
	};

	test('Add the text if text available', () => {
		const component = render(AddButton(context)).getByRole('AddButton');

		expect(component).toHaveTextContent('+');
		expect(component).toBeInTheDocument();
	});

	test('check the accessibility of the clickEvent', () => {
		const component = render(AddButton(context)).getByRole('AddButton');

		fireEvent.click(component);
		expect(context.actions.addTodo).toHaveBeenCalledWith();
	});

	describe('check add Button in able or disable condition', () => {
		test('disable condition', () => {
			jest.spyOn(TodoManager, 'hasInput').mockReturnValue(true);
			const component = render(AddButton(context)).getByRole('AddButton');

			expect(component).toBeDisabled();
			expect(TodoManager.hasInput)
				.toHaveBeenCalledWith(context.state.input);
		});
		test('enable condition', () => {
			jest.spyOn(TodoManager, 'hasInput').mockReturnValue(false);
			const component = render(AddButton(context)).getByRole('AddButton');

			expect(component).not.toBeDisabled();
			expect(TodoManager.hasInput)
				.toHaveBeenCalledWith(context.state.input);
		});
	});
});
