import { React } from 'react';
import UserInputs from './UserInput';
import TodoList from './TodoListDisplay/TodoList';

const TodoPane = (context) =>
	<div role="TodoPane" className="TodoPane">
		<h3>Todo</h3>
		<UserInputs { ...context }/>
		<TodoList { ...context }/>
	</div>;

export default TodoPane;
