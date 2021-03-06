import actions from './actions';
import TodoManager from '../services/TodoManager.js';
import TaskManager from '../services/TaskManager';

describe('to test the action functions', () => {
	const { updateInput, addTodo, toggleTodo,
		ClearCompleted, setFilter,
		setEditing, editTodo, setTasks, removeTask,
		addTask, AddTasks, toggleAll, removeTodo } = actions;

	const data = {
		id: Symbol('id'),
		text: Symbol('text'),
	};
	const state = {
		input: Symbol('input'),
		todos: Symbol('todos'),
		filter: Symbol('filter'),
		editing: Symbol('editing'),
		Tasks: Symbol('task'),
	};
	const context = { data, state };
	const expectedTodos = [Symbol('Todos')];
	const expectedTasks = Symbol('Task');

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
	const ActionTests = (method, Method) => {
		jest.spyOn(TodoManager, method).mockReturnValue(expectedTodos);
		const result = Method(context);

		expect(result).toEqual({ todos: expectedTodos });
		expect(TodoManager[method])
			.toHaveBeenCalledWith(context.state.todos, context.data);
	};

	test('ToggleTodo - toggle the todos', () => {
		ActionTests('toggleTodo', toggleTodo);
	});

	test('removeTodo - remove the todo', () => {
		ActionTests('removeTodo', removeTodo);
	});

	test('toggleAll- toggling all the todo', () => {
		ActionTests('toggleAll', toggleAll);
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

	test('removeTask - remove the Task', () => {
		jest.spyOn(TaskManager, 'removeTask').mockReturnValue(expectedTasks);
		const result = removeTask(context);

		expect(result).toEqual({ Tasks: expectedTasks });
		expect(TaskManager.removeTask)
			.toHaveBeenCalledWith(context.state.Tasks, context.data);
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
