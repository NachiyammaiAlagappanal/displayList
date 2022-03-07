import TaskManager from '../services/TaskManager.js';
const updateInput = ({ data }) => ({
	input: data,
});
const addTodo = ({ state }) => ({
	todos: TaskManager.AddTodo(state.todos, state.input),
});

const actions = {
	updateInput,
	addTodo,
};

export default actions;
