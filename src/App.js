import { React, useEffect } from 'react';
import TodoPane from './components/TodoPane/index.js';
import './App.scss';
import TaskPane from './components/TaskPane/index.js';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';
import TodoManager from './services/TodoManager.js';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	useEffect(() => TodoManager.getAllTodo(context), []);

	return (
		<div className="App" role="App">
			<TodoPane { ...context }/>
			<TaskPane { ...context }/>
		</div>
	);
};

export default App;
