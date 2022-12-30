import { React } from 'react';
import { Box, Button } from '@mui/material';

const AddTaskToTodo = (context) => {
	const { data: task } = context;

	return (
		<Button
			variant="outlined"
			role="AddButton"
			onClick={ () => { context.actions.addTodo(task.text);	} }
		>
			+</Button>
	);
};

const RemoveButton = (context) => {
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
		<Box
			key={ id }
			role="Task"
		>	<Box component="span"><AddTaskToTodo { ...context }/></Box>
			<Box component="span">{text}</Box>
			<Box component="span"><RemoveButton { ...context }/></Box>
		</Box>
	);
};

export default Task;
