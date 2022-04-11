import { React } from 'react';

const addTaskToTodo = (context) => {
	const { data: task } = context;

	return (
		<button
			role="AddButton"
			onClick={ () => context.actions.addTask(task) }
		>
			+</button>
	);
};

const removeButton = (context) => {
	const { data: task } = context;

	return (
		<button
			role="removeButton"
			onClick={ () => context.actions.removeTask(task) }
		>
			X</button>
	);
};

const Task = (context) => {
	const { data: { id, text }} = context;

	return (
		<div
			key={ id }
			role="Task"
		>
			<span>{ text }</span>
			<span>{ addTaskToTodo(context) }</span>
			<span>{ removeButton(context) }</span>
		</div>
	);
};

export default Task;
