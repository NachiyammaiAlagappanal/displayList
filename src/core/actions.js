import TaskManager from '../services/TaskManager.js';
import TodoManager from '../services/TodoManager.js';

const updateInput = ({ data }) => ({
	input: data,
});
const toggleMenu = (context) => ({
	value: context.data,
});
const toggleMode = (context) => ({
	theme: context.data,
	themeButton: false,
});
const toggleTheme = (context) => ({
	themeButton: context.data,
});
const addTodo = (context) => ({
	todos: TodoManager.addTodo(context),
	input: '',
});
const changeColor = (context) => ({
	todos: TodoManager.changeColor(context),
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
	todos: TodoManager.clearCompleted(context),
});
const setFilter = ({ data }) => ({
	filter: data,
});
const setEditing = ({ data }) => ({
	editing: data,
	input: data.text,
});
const editTodo = (context) => ({
	input: '',
	editing: null,
	todos: TodoManager.editTodo(context),
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

const actions = {
	updateInput,
	addTodo,
	toggleTodo,
	removeTodo,
	toggleAll,
	clearCompleted,
	setFilter,
	setEditing,
	changeColor,
	editTodo,
	setTasks,
	removeTask,
	addTasks,
	toggleMenu,
	toggleMode,
	toggleTheme,
};

export default actions;
