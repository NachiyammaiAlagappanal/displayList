/* eslint-disable no-console */
import { rndString } from '@laufire/utils/random';

const TodoManager = {

	getText: ({ config, data: { text }}) => ({
		id: rndString(config.idLength),
		text: text,
		completed: false,
	}),

	hasInput: (input) => input === '',

	hasCompletedCount: (todos) =>
		todos.filter((todo) => todo.completed).length === 0,

	getTodosCount: (todos) => todos.length,

	getActiveCount: (todos) =>
		todos.filter((todo) => !todo.completed).length,

	filters: {
		all: () => true,
		active: (todos) => !todos.completed,
		completed: (todos) => todos.completed,
	},
	AddTodo: (context) =>
		context.state.todos.concat(TodoManager.getText(context)),

	toggleTodo: (context) =>
		context.state.todos.map((todo) => (todo.id !== context.data.id
			? todo
			: {
				...todo,
				completed: !context.data.completed,
			}
		)),

	removeTodo: (context) => context.state.todos.filter((todo) =>
		todo.id !== context.data.id),

	toggleAll: (context) => context.state.todos.map((todo) => ({
		...todo,
		completed: context.data,
	})),

	ClearCompleted: (context) =>
		context.state.todos.filter((todo) => !todo.completed),

	hasActiveCount: (context) =>
		TodoManager.getActiveCount(context.state.todos) === 0,

	filterTodos: ({ state: { todos, filter }}) =>
		todos.filter(TodoManager.filters[filter]),

	hasNoTodos: (context) =>
		TodoManager.getTodosCount(context.state.todos) === 0,

	editTodo: (
		todos, editing, text
	) => todos.map((todo) => (todo.id !== editing.id
		? todo
		: {
			...todo,
			text,
		})),

};

export default TodoManager;
