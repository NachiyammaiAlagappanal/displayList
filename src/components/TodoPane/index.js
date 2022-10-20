import { React } from 'react';
import UserInput from './UserInput';
import TodoList from './TodoListDisplay/TodoList';

const TodoPane = (context) =>
	<div role="TodoPane" className="TodoPane">
		<h3>Todo</h3>
		<UserInput { ...context }/>
		<TodoList { ...context }/>
	</div>;

export default TodoPane;
