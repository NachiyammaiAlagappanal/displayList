import actions from './actions';
import TodoManager from '../services/TodoManager.js';
import TaskManager from '../services/TaskManager';

describe('to test the action functions', () => {
	const { updateInput, addTodo, toggleTodo,
		clearCompleted, setFilter,
		setEditing, editTodo, setTasks, removeTask,
		addTasks, toggleAll, removeTodo } = actions;

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
		jest.spyOn(TodoManager, 'addTodo').mockReturnValue(expectedTodos);
		const result = addTodo(context);

		expect(result).toEqual({ todos: expectedTodos });
		expect(TodoManager.addTodo).toHaveBeenCalledWith(context);
	});
	const ActionTests = (method, Method) => {
		jest.spyOn(TodoManager, method).mockReturnValue(expectedTodos);
		const result = Method(context);

		expect(result).toEqual({ todos: expectedTodos });
		expect(TodoManager[method])
			.toHaveBeenCalledWith(context);
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
		jest.spyOn(TodoManager, 'clearCompleted')
			.mockReturnValue(expectedTodos);
		const result = clearCompleted(context);

		expect(result).toEqual({ todos: expectedTodos });
		expect(TodoManager.clearCompleted)
			.toHaveBeenCalledWith(context);
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

		expect(TodoManager.editTodo).toHaveBeenCalledWith({ state });
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
			.toHaveBeenCalledWith(context);
	});

	test('addTasks - add the task in taskList', () => {
		jest.spyOn(TaskManager, 'addTask').mockReturnValue(expectedTasks);
		const result = addTasks(context);

		expect(result).toEqual({ Tasks: expectedTasks });
		expect(TaskManager.addTask)
			.toHaveBeenCalledWith(context);
	});
});
