import { random } from '@laufire/utils';
import { render, fireEvent } from '@testing-library/react';
import inputTextBox from './TodoInput';

const actions = {
	updateInput: jest.fn(),
	addTodo: jest.fn(),
	editTodo: jest.fn(),
};

describe('TodoInput', () => {
	const context = {
		state: {
			input: '',
		},
		actions: actions,
	};

	test('To check the presence of textBox', () => {
		const textBox = render(inputTextBox(context)).getByRole('textBox');

		expect(textBox).toBeInTheDocument();
	});

	test('changes are reflected to state by value', () => {
		const length = 8;
		const value = random.rndString(length);
		const textBox = render(inputTextBox(context)).getByRole('textBox');

		fireEvent.change(textBox, { target: { value }});
		expect(context.actions.updateInput).toHaveBeenCalledWith(value);
	});

	test('ActionKeys are not match with the given case', () => {
		const code = random.rndString(1);
		const textBox = render(inputTextBox(context)).getByRole('textBox');

		fireEvent.keyUp(textBox, { code });
		expect(context.actions.addTodo).not.toHaveBeenCalledWith(context);
		expect(context.actions.editTodo).not.toHaveBeenCalledWith(context);
		expect(context.actions.updateInput).not.toHaveBeenCalledWith(context);
	});
});

describe('ActionKey usage', () => {
	const testEnterKey = (editing, action) => {
		const context = {
			state: {
				editing,
			},
			actions: actions,
		};

		const textBox = render(inputTextBox(context)).getByRole('textBox');

		fireEvent.keyUp(textBox, { code: 'Enter' });
		expect(context.actions[action]).toHaveBeenCalledWith(context);
	};

	test('Enter key to Add the todo', () => {
		testEnterKey(null, 'addTodo');
	});

	test('Enter key to edit the todo', () => {
		testEnterKey({}, 'editTodo');
	});

	test('Escape key to set input as empty', () => {
		const context = {
			actions: actions,
			state: {},
		};
		const textBox = render(inputTextBox(context)).getByRole('textBox');

		fireEvent.keyUp(textBox, { code: 'Escape' });
		expect(context.actions.updateInput).toHaveBeenCalledWith('');
	});
});
