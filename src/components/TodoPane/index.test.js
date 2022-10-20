import { React } from 'react';
import * as UserInput from './UserInput';
import * as TodoList from './TodoListDisplay/TodoList';
import { render } from '@testing-library/react';
import TodoPane from './index';

test('Check the TodoPane execution', () => {
	const context = {
		actions: {},
		state: {
			todos: [],
		},
	};

	jest.spyOn(UserInput, 'default')
		.mockReturnValue(<div role="UserInput"/>);
	jest.spyOn(TodoList, 'default')
		.mockReturnValue(<div role="TodoList"/>);

	const { getByRole } = render(TodoPane(context));

	expect(UserInput.default.mock.calls[0][0]).toEqual(context);
	expect(TodoList.default.mock.calls[0][0]).toEqual(context);
	expect(getByRole('UserInput')).toBeInTheDocument();
	expect(getByRole('TodoPane')).toHaveTextContent('Todo');
	expect(getByRole('TodoList')).toBeInTheDocument();
});
