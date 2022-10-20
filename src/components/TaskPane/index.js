import { React } from 'react';
import TaskList from './TaskList';

const TaskPane = (context) =>
	<div
		role="TaskPane"
		className="TaskPane"
	>
		<h3> TASK</h3>
		<TaskList { ...context }/>
	</div>;

export default TaskPane;
