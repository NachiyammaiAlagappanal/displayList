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
	return (
		<ThemeProvider theme={ Theme(context) }>
			<Box role="App">
				<GetSurface { ...context }/>
			</Box>
		</ThemeProvider>
	);
};

export default App;
