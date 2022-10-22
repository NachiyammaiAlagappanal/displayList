import TaskManager from '../services/TaskManager.js';
import TodoManager from '../services/TodoManager.js';

const updateInput = ({ data }) => ({
	input: data,
});
const toggleTodo = (context) => ({
	todos: TodoManager.toggleTodo(context),
});

const removeTodo = ({ data: todos }) => ({ todos });

const toggleAll = (context) => ({
	todos: TodoManager.toggleAll(context),
});
const clearCompleted = (context) => ({
	todos: TodoManager.clearCompleted(context),
});
const setFilter = ({ data }) => ({
	filter: data,
});
const setEditing = ({ data }) => ({
	editing: data,
	input: data.text,
});
const editTodos = ({ data: todos }) => ({
	input: '',
	editing: null,
	todos: todos,
});
const setTasks = (context) => ({
	Tasks: context.data,
});
const removeTask = (context) => ({
	Tasks: TaskManager.removeTask(context),
});
const addTasks = (context) => ({
	Tasks: TaskManager.addTask(context),
});
const addTodo = (context) => ({
	todos: [
		...context.state.todos,
		context.data,
	],
});
const setTodos = (context) => ({ todos: [...context.data] });

const actions = {
	updateInput,
	toggleTodo,
	removeTodo,
	toggleAll,
	clearCompleted,
	setFilter,
	setEditing,
	editTodos,
	setTasks,
	removeTask,
	addTasks,
	addTodo,
	setTodos,
};

export default actions;
