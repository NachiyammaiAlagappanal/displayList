/* eslint-disable max-lines-per-function */
import { React } from 'react';
import context from '../core/context.js';

const sharedStyle = {
	height: '1em',
};
const completedStyle = {
	...sharedStyle,
	color: 'pink',
};
const activeStyle = {
	...sharedStyle,
	color: 'blue',
};

const CheckBox = (todo) =>
	<input
		type="checkbox"
		// eslint-disable-next-line react/destructuring-assignment
		checked={ todo.completed }
		onChange={ () => context.actions.toggleTodo(todo) }
	/>;
const removeTodo = (todo) =>
	<button
		onClick={ () => context.actions.removeTodo(todo) }
	>X
	</button>;

const Todo = (todo) => {
	const { id, text, completed } = todo;
	const style = completed ? completedStyle : activeStyle;

	return (
		<div key={ id } style={ style }>
			<span>{ CheckBox(todo) }</span>
			<span>{ text }</span>
			<span>{ removeTodo(todo) }</span>
		</div>
	);
};

export default Todo;
