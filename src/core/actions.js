/* eslint-disable no-console */
import TaskManager from '../services/TaskManager.js';
import TodoManager from '../services/TodoManager.js';

const updateInput = ({ data }) => ({
	input: data,
});

const toggleTodo = (context) => ({
	todos: TodoManager.toggleTodo(context.state.todos, context.data),
});
const removeTodo = (context) => ({
	todos: TodoManager.removeTodo(context.state.todos, context.data),
});
const toggleAll = (context) => ({
	todos: TodoManager.toggleAll(context.state.todos, context.data),
});
const ClearCompleted = (context) => ({
	todos: TodoManager.ClearCompleted(context.state.todos),
});
const setFilter = ({ data }) => ({
	filter: data,
});
const setEditing = ({ data }) => ({
	editing: data,
	input: data.text,
});
const editTodo = ({ state }) => ({
	input: '',
	editing: null,
	todos: TodoManager.editTodo(
		state.todos, state.editing, state.input
	),
});
const setTasks = (context) => ({
	Tasks: context.data,
});
const removeTask = (context) => ({
	Tasks: TaskManager.removeTask(context.state.Tasks, context.data),
});
const AddTasks = (context) => ({
	Tasks: TaskManager.AddTask({ ... context, task: context.data }),
});
const addTodo = ({ data: todos }) => ({
	todos,
});

const actions = {
	updateInput,
	toggleTodo,
	removeTodo,
	toggleAll,
	ClearCompleted,
	setFilter,
	setEditing,
	editTodo,
	setTasks,
	removeTask,
	AddTasks,
	addTodo,
};

export default actions;
