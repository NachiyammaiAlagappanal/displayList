/* eslint-disable react/destructuring-assignment */
import { React, useEffect } from 'react';
import TodoPane from './components/TodoPane/index.js';
import './App.scss';
import TaskPane from './components/TaskPane/index.js';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div className="App" role="App">
			<div>{ TodoPane(context) }</div>
			<div>{ TaskPane(context) }</div>
		</div>
	);
};

export default App;
