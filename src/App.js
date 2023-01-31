import { React, useEffect } from 'react';
import './App.scss';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';
import { Box } from '@mui/material';
import MuiIndex from './components/MUIcomponents/index';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	return (
		<Box role="App" overflow="hidden">
			<MuiIndex { ...context }/>
		</Box>

	);
};

export default App;
