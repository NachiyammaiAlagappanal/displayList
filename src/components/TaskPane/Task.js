import { React } from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const AddTaskToTodo = (context) => {
	const { data: task } = context;

	return (
		<Button
			role="AddButton"
			onClick={ () => { context.actions.addTodo(task.text);	} }
		>
			<AddIcon sx={ { color: 'lightGrey' } }/></Button>
	);
};

const RemoveButton = (context) => {
	const { data: task } = context;

	return (
		<Button
			role="removeButton"
			sx={ { color: '#ecb0b0' } }
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
		>	<Box component="span"><AddTaskToTodo { ...context }/></Box>
			<Box component="span">{text}</Box>
			<Box component="span"><RemoveButton { ...context }/></Box>
		</Box>
	);
};

export default Task;
