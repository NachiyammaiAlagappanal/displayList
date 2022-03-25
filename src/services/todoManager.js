/* eslint-disable no-console */
import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const getText = (text) => ({
	id: rndString(config.idLength),
	text: text,
	completed: false,
});

const getTodosCount = (todos) => todos.length;

const getActiveCount = (todos) =>
	todos.filter((todo) => !todo.completed).length;

const filters = {
	all: () => true,
	active: (todos) => !todos.completed,
	completed: (todos) => todos.completed,
};
const todoManager = {

	AddTodo: (todos, text) => todos.concat(getText(text)),

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

	hasActiveCount: (todos) => getActiveCount(todos) === 0,

	filterTodos: (todos, filter) => todos.filter(filters[filter]),

	hasNoTodos: (todos) => getTodosCount(todos) === 0,

	editTodo: (
		todos, editing, text
	) => todos.map((todo) => (todo.id !== editing.id
		? todo
		: {
			...todo,
			text,
		})),

};

export default todoManager;
