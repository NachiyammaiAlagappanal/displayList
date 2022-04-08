import { random } from '@laufire/utils';
import { render, fireEvent } from '@testing-library/react';
import inputTextBox from './TodoInput';

describe('TodoInput', () => {
	const context = {
		state: {
			input: '',
		},
		actions: {
			updateInput: jest.fn(),
			addTodo: jest.fn(),
			editTodo: jest.fn(),
		},
	};

	test('To check the presence of textBox', () => {
		const result = render(inputTextBox(context)).getByRole('textBox');

		expect(result).toBeInTheDocument();
	});
	test('change the input in state by value', () => {
		const length = 8;
		const value = random.rndString(length);
		const result = render(inputTextBox(context)).getByRole('textBox');

		fireEvent.change(result, { target: { value }});
		expect(context.actions.updateInput).toHaveBeenCalledWith(value);
	});
	test('ActionKeys are not match with the given case', () => {
		const code = random.rndString(1);
		const result = render(inputTextBox(context)).getByRole('textBox');

		fireEvent.keyUp(result, { code });
		expect(context.actions.addTodo).not.toHaveBeenCalledWith(context);
		expect(context.actions.editTodo).not.toHaveBeenCalledWith(context);
		expect(context.actions.updateInput).not.toHaveBeenCalledWith(context);
	});
});
describe('ActionKey usage', () => {
	test('Enter key to Add the todo', () => {
		const context = {
			state: {
				editing: false,
			},
			actions: {
				addTodo: jest.fn(),
			},
		};
		const code = 'Enter';
		const result = render(inputTextBox(context)).getByRole('textBox');

		fireEvent.keyUp(result, { code });
		expect(context.actions.addTodo).toHaveBeenCalledWith(context);
	});
	test('Enter key to edit the todo', () => {
		const context = {
			state: {
				editing: true,
			},
			actions: {
				editTodo: jest.fn(),
			},
		};
		const code = 'Enter';
		const result = render(inputTextBox(context)).getByRole('textBox');

		fireEvent.keyUp(result, { code });
		expect(context.actions.editTodo).toHaveBeenCalledWith(context);
	});
	test('Escape key to set input as empty', () => {
		const context = {
			state: {
				editing: true,
			},
			actions: {
				updateInput: jest.fn(),
			},
		};
		const code = 'Escape';
		const result = render(inputTextBox(context)).getByRole('textBox');

		fireEvent.keyUp(result, { code });
		expect(context.actions.updateInput).toHaveBeenCalledWith('');
	});
});
