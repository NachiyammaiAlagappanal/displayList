const getText = (text) => ({
	text,
});

const AddTodo = (todos, text) => {
	// eslint-disable-next-line no-console
	console.log(todos);
	return todos.concat(getText(text));
};

const TaskManager = {
	AddTodo,
};

export default TaskManager;
