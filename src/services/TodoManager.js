/* eslint-disable no-console */
import { rndString } from '@laufire/utils/random';

const TodoManager = {

	getText: ({ config, data: { text }}) => ({
		id: rndString(config.idLength),
		text: text,
		completed: false,
	}),

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

	toggleTodo: (todos, data) =>
		todos.map((todo) => (todo.id !== data.id
			? todo
			: {
				...todo,
				completed: !data.completed,
			}
		)),

	removeTodo: (todos, data) => todos.filter((todo) => todo.id !== data.id),

	toggleAll: (todos, isSelected) => todos.map((todo) => ({
		...todo,
		completed: !isSelected,
	})),

	ClearCompleted: (todos) => todos.filter((todo) => !todo.completed),

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
