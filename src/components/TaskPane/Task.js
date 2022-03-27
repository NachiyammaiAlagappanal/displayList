import { React } from 'react';

const Task = (context) => {
	const { state: { Tasks }} = context;
	const { text, id } = Tasks;

	return (
		<div
			key={ id }
		>
			<span>{ text }</span></div>
	);
};

export default Task;
