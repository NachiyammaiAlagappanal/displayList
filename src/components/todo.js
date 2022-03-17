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

const Todo = (todo) => {
	const { id, text, completed } = todo;
	const style = completed ? completedStyle : activeStyle;

	return (
		<div key={ id }>
			<span>
				<input
					type="checkbox"
					onChange={ () => context.actions.toggleTodo(todo) }
				/>
			</span>
			<span style={ style }>{ text }</span>
			<span>
				<button
					onClick={ () => context.actions.removeTodo(todo) }
				>X
				</button>;</span>
		</div>
	);
};

export default Todo;
