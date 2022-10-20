import { React, useEffect } from 'react';
import TodoPane from './components/TodoPane/index.js';
import './App.scss';
import TaskPane from './components/TaskPane/index.js';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);

	return (
		<div className="App" role="App">
			<TodoPane { ...context }/>
			<TaskPane { ...context }/>
		</div>
	);
};

export default App;
