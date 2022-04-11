import { React } from 'react';
import Task from './Task.js';

const TaskList = (context) => {
	const { state: { Tasks }} = context;

	return (

		<div role="TaskList">
			{ Tasks.map((task) => Task({ ...context, data: task })) } </div>
	);
};

export default TaskList;
