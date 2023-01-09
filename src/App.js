/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';
import { Box, ThemeProvider } from '@mui/material';
import GetSurface from './components/GetSurface';
import Theme from './Theme/Theme';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	console.log(context);
	return (
		<ThemeProvider theme={ Theme(context) }>
			<Box role="App">
				<GetSurface { ...context }/>
			</Box>
		</ThemeProvider>
	);
};

export default App;
