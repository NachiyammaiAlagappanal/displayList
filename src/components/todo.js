import { React } from 'react';

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

const CheckBox = (context) => {
	const { data: { todo }} = context;
	const { completed } = todo;

	return (
		<input
			type="checkbox"
			checked={ completed }
			onChange={ () => context.actions.toggleTodo(todo) }
		/>
	);
};
const removeTodo = (context) => {
	const { data: { todo }} = context;

	return (
		<button
			onClick={ () => context.actions.removeTodo(todo) }
		>X
		</button>
	);
};

const Todo = (context) => {
	const { data: { todo }} = context;
	const { id, text, completed } = todo;
	const style = completed ? completedStyle : activeStyle;

	return (
		<div key={ id } style={ style }>
			<span>{ CheckBox(context) }</span>
			<span onClick={ () => context.actions.setEditing(todo) }>
				{ text }</span>
			<span>{ removeTodo(context) }</span>
		</div>
	);
};

export default Todo;
