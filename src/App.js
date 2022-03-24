/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
import './App.scss';
import inputTextBox from './components/inputTextBox.js';
import TodoList from './components/todoList.js';
import ToggleAllButton from './components/ToggleAllButton.js';
import ClearButton from './components/clearButton.js';
import filterBar from './components/filterBar.js';
import todoEditing from './components/todoEditing.js';
import TodoAdding from './components/TodoAdding';

const App = (context) => {
	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div className="App" role="App">
			<div>{ 	ToggleAllButton(context) }
				{ inputTextBox(context) }
				{ TodoAdding(context) }
				{ todoEditing(context) }</div>
			<div>{ TodoList(context) }</div>
			<div>{ ClearButton(context) }</div>
			<div>{ filterBar(context) }</div>
		</div>
	);
};

export default App;
