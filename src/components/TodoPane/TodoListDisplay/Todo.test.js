import Todo from './Todo';
import { React } from 'react';
import { render, fireEvent } from '@testing-library/react';

const todo = {
	id: expect.any('string'),
	text: Symbol('text'),
	completed: false,
};

const context = {
	actions: {
		setEditing: jest.fn(),
		toggleTodo: jest.fn(),
		removeTodo: jest.fn(),
	},
	data: { todo },
};
const { actions } = context;

test('To check presence of CheckBox, text, removeButton', () => {
	const TodoList = render(Todo(context)).getByRole('TodoList');

	expect(TodoList).toBeInTheDocument();
});

test('ToggleTodo checkBox - toggles the todo', () => {
	const CheckBox = render(Todo(context)).getByRole('CheckBox');

	fireEvent.click(CheckBox);
	expect(actions.toggleTodo)
		.toHaveBeenCalledWith(todo);
});

test('Edit the todo, when clicked on the text', () => {
	const setEditing = render(Todo(context)).getByRole('setEditing');

	fireEvent.click(setEditing);
	expect(actions.setEditing)
		.toHaveBeenCalledWith(todo);
});

test('remove the todo, when clicked on the removeButton', () => {
	const removeButton = render(Todo(context)).getByRole('removeButton');

	fireEvent.click(removeButton);
	expect(actions.removeTodo)
		.toHaveBeenCalledWith(todo);
});
