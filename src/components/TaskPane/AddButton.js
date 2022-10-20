import { React } from 'react';
import TodoManager from '../../services/TodoManager';
import { Button } from '@mui/material';

const AddTaskToTodo = (context) => {
	const { data: { text }} = context;

	return (
		<Button
			variant="outlined"
			role="AddButton"
			onClick={ () => TodoManager.addTodo({
				...context,
				data: text,
			}) }
		>
			+</Button>);
};

export default AddTaskToTodo;
