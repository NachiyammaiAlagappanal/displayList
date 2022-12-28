import { React, useEffect } from 'react';
import TodoPane from './components/TodoPane/index.js';
import './App.scss';
import TaskPane from './components/TaskPane/index.js';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';
import { Box } from '@mui/material';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);

	return (
		<Box role="App">
			<TodoPane { ...context }/>
			<TaskPane { ...context }/>
		</Box>
	);
};

export default App;
