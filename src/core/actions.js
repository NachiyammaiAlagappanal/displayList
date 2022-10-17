import TaskManager from '../services/TaskManager.js';
import TodoManager from '../services/TodoManager.js';

const updateInput = ({ data }) => ({
	input: data,
});
const addTodo = (context) => ({
	todos: TodoManager.addTodo(context),
});
const toggleTodo = (context) => ({
	todos: TodoManager.toggleTodo(context),
});
const removeTodo = (context) => ({
	todos: TodoManager.removeTodo(context),
});
const toggleAll = (context) => ({
	todos: TodoManager.toggleAll(context),
});
const clearCompleted = (context) => ({
	todos: TodoManager.clearCompleted(context.state.todos),
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
	todos: TodoManager.editTodo({ state }),
});
const setTasks = (context) => ({
	Tasks: context.data,
});
const removeTask = (context) => ({
	Tasks: TaskManager.removeTask(context),
});
const addTasks = (context) => ({
	Tasks: TaskManager.addTask({ ... context, task: context.data }),
});

const actions = {
	updateInput,
	addTodo,
	toggleTodo,
	removeTodo,
	toggleAll,
	clearCompleted,
	setFilter,
	setEditing,
	editTodo,
	setTasks,
	removeTask,
	addTasks,

};

export default actions;
