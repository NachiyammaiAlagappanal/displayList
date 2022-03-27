/* eslint-disable no-console */
import TodoManager from '../services/TodoManager.js';

const updateInput = ({ data }) => ({
	input: data,
});
const addTodo = (context) => ({
	todos: TodoManager.AddTodo(context),
});
const toggleTodo = (context) => ({
	todos: TodoManager.toggleTodo(context.state.todos, context.data),
});
const removeTodo = (context) => ({
	todos: TodoManager.removeTodo(context.state.todos, context.data),
});
const toggleAll = (context, isSelected) => ({
	todos: TodoManager.toggleAll(context.state.todos, isSelected),
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
const setTasks = ({ data }) => ({
	Tasks: data,
});

const actions = {
	updateInput,
	addTodo,
	toggleTodo,
	removeTodo,
	toggleAll,
	ClearCompleted,
	setFilter,
	setEditing,
	editTodo,
	setTasks,

};

export default actions;
