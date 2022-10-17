import { React } from 'react';

const CheckBox = (context) => {
	const { actions, data: { todo }} = context;
	const { completed } = todo;

	return (
		<input
			role="CheckBox"
			type="checkbox"
			checked={ completed }
			onChange={ () => actions.toggleTodo(todo) }
		/>
	);
};
const RemoveButton = (context) => {
	const { data: { todo }} = context;

	return (
		<button
			role="removeButton"
			onClick={ () => context.actions.removeTodo(todo) }
		>X
		</button>
	);
};

const Todo = (context) => {
	const { actions, data: { todo }} = context;
	const { id, text, completed } = todo;
	const style = completed ? 'completedStyle' : 'activeStyle';

	return (
		<div
			key={ id }
			role="Todo"
			className="sharedStyle"
		>
			<span><CheckBox { ...context }/></span>
			<span
				className={ style }
				role="setEditing"
				onClick={ () => actions.setEditing(todo) }
			>	{ text }</span>
			<span><RemoveButton { ...context }/></span>
		</div>
	);
};

export default Todo;
