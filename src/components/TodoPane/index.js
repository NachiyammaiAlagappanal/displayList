import { React } from 'react';
import UserInput from './UserInput';
import TodoListDisplay from './TodoListDisplay';

const TodoPane = (context) =>
	<div className="TodoPane">
		<h3> Todo</h3>
		<div><UserInput { ...context }/></div>
		<div><TodoListDisplay { ...context }/></div>
	</div>;

export default TodoPane;
