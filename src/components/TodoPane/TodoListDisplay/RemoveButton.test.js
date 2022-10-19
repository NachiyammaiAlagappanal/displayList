import RemoveButton from './RemoveButton';
import { render, fireEvent } from '@testing-library/react';

const todo = {
	id: expect.any('string'),
	text: Symbol('text'),
	completed: false,
};
const context = {
	actions: {
		removeTodo: jest.fn(),
	},
	data: { todo },
};
const { actions } = context;

test('remove the todo, when clicked on the removeButton', () => {
	const removeButton = render(RemoveButton(context))
		.getByRole('removeButton');

	fireEvent.click(removeButton);
	expect(actions.removeTodo)
		.toHaveBeenCalledWith(todo);
});
