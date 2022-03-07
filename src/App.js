/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
import './App.scss';
import addTodo from './components/addTodo';
import getInput from './components/getInput.js';
import TodoList from './components/todoList.js';

const App = (context) => {
	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div className="App" role="App">
			<div>{ getInput(context) }</div>
			<div>{ addTodo(context) }</div>
			<div>{ TodoList() }</div>
		</div>
	);
};

export default App;
