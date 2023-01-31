import { Box } from '@mui/material';
import { React } from 'react';
import Task from './Task.js';

const TaskList = (context) => {
	const { state: { Tasks }} = context;

	return (

		<Box role="TaskList">
			{ Tasks.map((task, index) =>
				<Task key={ index }{ ...{ ...context, data: task } }/>)}</Box>
	);
};

export default TaskList;
