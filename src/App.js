/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';
import { Box } from '@mui/material';
import Frame from './components';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	console.log(context);

	return (
		<Box role="App">
			<Frame { ...context }/>
		</Box>
	);
};

export default App;
