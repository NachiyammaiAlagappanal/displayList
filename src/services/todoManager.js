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

const todoManager = {
	AddTodo,
	toggleTodo,
	removeTodo,
};

export default todoManager;
