import Todo from './Todo';
import { render, fireEvent } from '@testing-library/react';
import * as RemoveButton from './RemoveButton';
import { React } from 'react';
import * as CheckBox from './CheckBox';

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
	const { getByRole } = render(Todo(context));

	expect(getByRole('Todo')).toBeInTheDocument();
});

test('checkBox - ableCondition', () => {
	jest.spyOn(CheckBox, 'default').mockReturnValue(<span role="CheckBox"/>);
	const { getByRole } = render(Todo(context));

	expect(CheckBox.default).toHaveBeenCalledWith(context, {});
	expect(getByRole('CheckBox')).toBeInTheDocument();
});

test('Edit the todo, when clicked on the text', () => {
	const setEditing = render(Todo(context)).getByRole('setEditing');

	fireEvent.click(setEditing);
	expect(actions.setEditing)
		.toHaveBeenCalledWith(todo);
});

test('remove the todo', () => {
	jest.spyOn(RemoveButton, 'default')
		.mockReturnValue(<span role="removeButton"/>);
	const { getByRole } = render(Todo(context));

	expect(RemoveButton.default).toHaveBeenCalledWith(context, {});
	expect(getByRole('removeButton')).toBeInTheDocument();
});
