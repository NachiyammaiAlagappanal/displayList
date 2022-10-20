import { React } from 'react';
import AddTaskToTodo from './AddButton';
import RemoveButton from './RemoveButton';

const Task = (context) => {
	const { data: { id, text }} = context;

	return (
		<div
			key={ id }
			role="Task"
		>
			<span>{text}</span>
			<span><AddTaskToTodo { ...context }/></span>
			<span><RemoveButton { ...context }/></span>
		</div>
	);
};

export default Task;
