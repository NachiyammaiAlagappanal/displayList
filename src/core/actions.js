import todoManager from '../services/todoManager.js';

const updateInput = ({ data }) => ({
	input: data,
});
const addTodo = ({ state }) => ({
	todos: todoManager.AddTodo(state.todos, state.input),
});
const toggleTodo = (context) => ({
	todos: todoManager.toggleTodo(context.state.todos, context.data),
});
const removeTodo = (context) => ({
	todos: todoManager.removeTodo(context.state.todos, context.data),
});
const toggleAll = (context, isSelected) => ({
	todos: todoManager.toggleAll(context.state.todos, isSelected),
});
const ClearCompleted = (context) => ({
	todos: todoManager.ClearCompleted(context.state.todos),
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
	editing: 'null',
	todos: todoManager.editTodo(
		state.todos, state.editing, state.input
	),
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

};

export default actions;
