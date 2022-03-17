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

const actions = {
	updateInput,
	addTodo,
	toggleTodo,
	removeTodo,

};

export default actions;
