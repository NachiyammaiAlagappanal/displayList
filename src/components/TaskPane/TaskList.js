import { React } from 'react';
import Task from './Task.js';

const TaskList = (context) => {
	const { state: { Tasks }} = context;

	return (

		<div>{ Tasks.map(Task) } </div>
	);
};

export default TaskList;
