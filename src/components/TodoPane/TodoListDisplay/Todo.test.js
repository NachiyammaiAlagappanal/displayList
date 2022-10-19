import Todo from './Todo';
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

test('Edit the todo, when clicked on the text', () => {
	const setEditing = render(Todo(context)).getByRole('setEditing');

	fireEvent.click(setEditing);
	expect(actions.setEditing)
		.toHaveBeenCalledWith(todo);
});
