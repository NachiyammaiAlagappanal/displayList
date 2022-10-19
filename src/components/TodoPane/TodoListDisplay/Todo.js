import { React } from 'react';
import CheckBox from './CheckBox';
import RemoveButton from './RemoveButton';

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
