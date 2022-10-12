import { React } from 'react';
import { Button } from '@mui/material';
import TodoBackend from '../../services/TodoBackend';

const addTaskToTodo = (context) => {
	const { data: task } = context;

	return (
		<Button
			variant="outlined"
			role="AddButton"
			onClick={ async () => {
				await TodoBackend.create(task);
				return context.actions.addTask(task);
			} }
		>
			+</Button>);
};

const removeButton = (context) => {
	const { data: task } = context;

	return (
		<Button
			variant="contained"
			color="error"
			role="removeButton"
			onClick={ () => context.actions.removeTask(task) }
		>
			X</Button>
	);
};

const Task = (context) => {
	const { data: { id, text }} = context;

	return (
		<div
			key={ id }
			role="Task"
		>
			<span>{text}</span>
			<span>{addTaskToTodo(context)}</span>
			<span>{removeButton(context)}</span>
		</div>
	);
};

export default Task;
