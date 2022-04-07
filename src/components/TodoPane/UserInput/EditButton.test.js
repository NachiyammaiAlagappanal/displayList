import { render, fireEvent } from '@testing-library/react';
import EditButton from './EditButton';

describe('Edit the todos', () => {
	const context = {
		actions: {
			editTodo: jest.fn(),
		},
		state: {
			editing: Symbol('text'),
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
});
