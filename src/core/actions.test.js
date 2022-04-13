import actions from './actions';
import TodoManager from '../services/TodoManager.js';
import TaskManager from '../services/TaskManager';

describe('to test the action functions', () => {
	const { updateInput, addTodo, toggleTodo, removeTodo, toggleAll,
		ClearCompleted, setFilter,
		setEditing, editTodo, setTasks, removeTask,
		addTask, AddTasks } = actions;

	const data = {
		id: Symbol('id'),
		text: Symbol('text'),
	};
	const state = {
		input: Symbol('input'),
		todos: Symbol('todos'),
		filter: Symbol('filter'),
		editing: Symbol('editing'),
		tasks: Symbol('task'),
	};
	const context = {
		data: {},
		state: {},
	};
	const expectedTodos = Symbol('Todos');
	const expectedTasks = Symbol('TASK');

	test('To check the input value to be updating', () => {
		const result = updateInput({ data });

		expect(result).toEqual({ input: data });
	});

	test('To check the input value added to the todos', () => {
		jest.spyOn(TodoManager, 'AddTodo').mockReturnValue(expectedTodos);
		const result = addTodo(context);

		expect(result).toEqual({ todos: expectedTodos });
		expect(TodoManager.AddTodo).toHaveBeenCalledWith({ ...context,
			data: { text: context.state.input }});
	});

	test('ToggleTodo - toggle the todos', () => {
		jest.spyOn(TodoManager, 'toggleTodo').mockReturnValue(expectedTodos);
		const result = toggleTodo(context);

		expect(result).toEqual({ todos: expectedTodos });
		expect(TodoManager.toggleTodo)
			.toHaveBeenCalledWith(context.state.todos, context.data);
	});

	test('removeTodo - remove the todo', () => {
		jest.spyOn(TodoManager, 'removeTodo').mockReturnValue(expectedTodos);
		const result = removeTodo(context);

		expect(result).toEqual({ todos: expectedTodos });
		expect(TodoManager.removeTodo)
			.toHaveBeenCalledWith(context.state.todos, context.data);
	});

	test('toggleAll- toggling all the todo', () => {
		jest.spyOn(TodoManager, 'toggleAll').mockReturnValue(expectedTodos);
		const result = toggleAll(context);

		expect(result).toEqual({ todos: expectedTodos });
		expect(TodoManager.toggleAll)
			.toHaveBeenCalledWith(context.state.todos, context.data);
	});

	test('ClearCompleted- clear the completed todos', () => {
		jest.spyOn(TodoManager, 'ClearCompleted')
			.mockReturnValue(expectedTodos);
		const result = ClearCompleted(context);

		expect(result).toEqual({ todos: expectedTodos });
		expect(TodoManager.ClearCompleted)
			.toHaveBeenCalledWith(context.state.todos);
	});

	test('setFilter - assign filter in the state based on user action', () => {
		const result = setFilter({ data });

		expect(result).toEqual({ filter: data });
	});

	test('setEditing - editing the state based on action', () => {
		const result = setEditing({ data });

		expect(result).toEqual({ editing: data, input: data.text });
	});

	test('setEditing - editing the todo', () => {
		jest.spyOn(TodoManager, 'editTodo').mockReturnValue(expectedTodos);
		const expectation = { todos: expectedTodos, input: '', editing: null };
		const result = editTodo({ state });

		expect(TodoManager.editTodo).toHaveBeenCalledWith(
			state.todos, state.editing, state.input
		);
		expect(result).toEqual(expectation);
	});

	test('setTasks - to update tasks in the state', () => {
		const result = setTasks({ data });

		expect(result).toEqual({ Tasks: data });
	});

	test('removeTodo - remove the todo', () => {
		jest.spyOn(TaskManager, 'removeTask').mockReturnValue(expectedTasks);
		const result = removeTask(context);

		expect(result).toEqual({ Tasks: expectedTasks });
		expect(TaskManager.removeTask)
			.toHaveBeenCalledWith(context.state.tasks, context.data);
	});

	test('addTask - add the task to todo', () => {
		jest.spyOn(TodoManager, 'AddTodo').mockReturnValue(expectedTodos);
		const result = addTask(context);

		expect(result).toEqual({ todos: expectedTodos });
		expect(TodoManager.AddTodo).toHaveBeenCalledWith(context);
	});

	test('AddTasks - add the task in taskList', () => {
		jest.spyOn(TaskManager, 'AddTask').mockReturnValue(expectedTasks);
		const result = AddTasks(context);

		expect(result).toEqual({ Tasks: expectedTasks });
		expect(TaskManager.AddTask)
			.toHaveBeenCalledWith({ ... context, task: context.data });
	});
});
