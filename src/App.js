/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
import './App.scss';
import addTodo from './components/addTodo';
import inputTextBox from './components/inputTextBox.js';
import TodoList from './components/todoList.js';
import ToggleAllButton from './components/ToggleAllButton.js';
import ClearButton from './components/clearButton.js';
import filterBar from './components/filterBar.js';

const App = (context) => {
	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div className="App" role="App">
			<div>{ 	ToggleAllButton(context) }
				{ inputTextBox(context) }</div>
			<div>{ addTodo(context) }</div>
			<div>{ TodoList(context) }</div>
			<div>{ ClearButton(context) }</div>
			<div>{ filterBar() }</div>
		</div>
	);
};

export default App;
