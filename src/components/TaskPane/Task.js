import { React } from 'react';

const Task = ({ data: { id, text }}) =>
	<div
		key={ id }
	>
		<span>{ text }</span>
	</div>;

export default Task;
