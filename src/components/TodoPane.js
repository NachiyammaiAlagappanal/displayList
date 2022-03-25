import { React } from 'react';
import inputTextBox from './inputTextBox.js';
import TodoList from './todoList.js';
import ToggleAllButton from './ToggleAllButton.js';
import ClearButton from './clearButton.js';
import filterBar from './filterBar.js';
import todoEditing from './todoEditing.js';
import TodoAdding from './TodoAdding.js';

const TodoPane = (context) =>
	<div className="TodoPane">
		<h3> Todo</h3>
		<div>{ 	ToggleAllButton(context) }
			{ inputTextBox(context) }
			{ TodoAdding(context) }
			{ todoEditing(context) }</div>
		<div>{ TodoList(context) }</div>
		<div>{ ClearButton(context) }</div>
		<div>{ filterBar(context) }</div>
	</div>
	;

export default TodoPane;
