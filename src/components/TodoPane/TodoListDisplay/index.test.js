import TodoListDisplay from './index';
import * as TodoList from './TodoList';
import { React } from 'react';

test('TodoPane display process', () => {
	const context = {
		state: {
			todos: [],
		},
	};

	jest.spyOn(TodoList, 'default').mockReturnValue(<div role="TodoList"/>);

	TodoListDisplay(context);

	expect(TodoList.default).toHaveBeenCalledWith(context);
});
