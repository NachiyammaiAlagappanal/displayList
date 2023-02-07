import { React } from 'react';
import { Box, Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const AddTaskToTodo = (context) => {
	const { data: task } = context;

	return (
		<Button
			role="AddButton"
			onClick={ () => { context.actions.addTodo(task.text);	} }
		>
			<AddIcon
				color="text"
				sx={ { '&:hover': { color: 'success.main' }} }
			/></Button>
	);
};

const RemoveButton = (context) => {
	const { data: task } = context;

	return (
		<Button
			role="removeButton"
			color="text"
			sx={ { '&:hover': { color: 'error.main' }} }
			onClick={ () => context.actions.removeTask(task) }
		>
			<ClearRoundedIcon/></Button>
	);
};

const Task = (context) => {
	const { data: { id, text }} = context;

	return (
		<Box
			key={ id }
			role="Task"
			className="row"
		>	<Box><AddTaskToTodo { ...context }/></Box>
			<Box
				sx={ { width: '79%', display: 'inline-block' } }
				color="text.contrast"
			>{text}</Box>
			<Box><RemoveButton { ...context }/></Box>
			<Divider/>
		</Box>);
};

export default Task;
