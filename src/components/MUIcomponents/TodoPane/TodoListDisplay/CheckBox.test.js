import CheckBox from './CheckBox';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

const todo = {
	id: expect.any('string'),
	text: Symbol('text'),
	completed: false,
};
const context = {
	actions: {
		toggleTodo: jest.fn(),
	},
	data: { todo },

};
const { actions } = context;

test('To check presence of CheckBox, text, removeButton', () => {
	const { getByRole } = render(CheckBox(context));

	expect(getByRole('CheckBox')).toBeInTheDocument();
});

test('ToggleTodo checkBox - toggles the todo', () => {
	const checkBox = render(Todo(context)).getByRole('CheckBox');

	fireEvent.click(checkBox);
	expect(actions.toggleTodo)
		.toHaveBeenCalledWith(todo);
});
