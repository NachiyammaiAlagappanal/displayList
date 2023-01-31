import TodoList from './TodoList';
import * as Todo from './Todo';
import { React } from '.';
import { render } from '@testing-library/react';
import { rndBetween } from '@laufire/utils/lib';
import TodoManager from '../../../services/TodoManager';
import { range } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

test('To check the Todo List display in proper manner', () => {
	const min = 2;
	const max = 10;
	const context = {
		state: {
			todos: Symbol('todo'),
			filter: Symbol('filter'),
		},
	};
	const filteredTodos = range(1, rndBetween(min, max)).map(Symbol);

	jest.spyOn(TodoManager, 'filterTodos')
		.mockReturnValue(filteredTodos);

	jest.spyOn(Todo, 'default')
		.mockImplementation(() => <div key={ rndString() }role="TodoList"/>);

	const { getAllByRole } = render(TodoList(context));

	expect(TodoManager.filterTodos)
		.toHaveBeenCalledWith(context);

	filteredTodos.map((todo, index) => {
		expect(Todo.default)
			.toHaveBeenCalledWith({ ...context,
				data: { todo }});
		expect(getAllByRole('TodoList')[index]).toBeInTheDocument();
	});
});
