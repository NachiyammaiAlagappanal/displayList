import { React } from 'react';
import TaskList from './TaskList';

const TaskPane = (context) =>
	<div
		role="TaskPane"
		className="TaskPane"
	>
		<h3> TASK</h3>
		<div><TaskList { ...context }/></div>

	</div>;

export default TaskPane;
