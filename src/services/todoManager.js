/* eslint-disable no-console */
import config from '../core/config';
import { rndString } from '@laufire/utils/random';
const getText = (text) => ({
	id: rndString(config.idLength),
	text: text,
	completed: false,
});

const AddTodo = (todos, text) => todos.concat(getText(text));

const toggleTodo = (todos, data) =>
	todos.map((todo) => (todo.id !== data.id
		? todo
		: {
			...todo,
			completed: !data.completed,
		}
	));
const removeTodo = (todos, data) => todos.filter((todo) => todo.id !== data.id);

const toggleAll = (todos, isSelected) => todos.map((todo) => ({
	...todo,
	completed: !isSelected,
}));

const ClearCompleted = (todos) => todos.filter((todo) => !todo.completed);

const getTodosCount = (todos) => todos.length;

const getActiveCount = (todos) =>
	todos.filter((todo) => !todo.completed).length;

const filters = {
	all: () => true,
	active: (todos) => !todos.completed,
	completed: (todos) => todos.completed,
};

const filterTodos = (todos, filter) => todos.filter(filters[filter]);

const todoManager = {
	AddTodo,
	toggleTodo,
	removeTodo,
	toggleAll,
	ClearCompleted,
	getActiveCount,
	getTodosCount,
	filterTodos,
};

export default todoManager;
