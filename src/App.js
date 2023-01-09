/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import GetSurface from './components/GetSurface';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#C8841E',
		},
		secondary: {
			main: '#C586C0',
		},
		warning: {
			main: '#7CDCFE',
		},
		error: {
			main: '#C61E1E',
		},
		success: {
			main: '#11cb5f',
		},
	},
});

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	console.log(context);
	return (
		<ThemeProvider theme={ theme }>
			<Box role="App">
				<GetSurface { ...context }/>
			</Box>
		</ThemeProvider>
	);
};

export default App;
