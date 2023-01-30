import { React, useEffect } from 'react';
import './App.scss';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';
import { Box, ThemeProvider } from '@mui/material';
import Surface from './components/MUIcomponents/Surface';
import Theme from './Theme/Theme';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	return (
		<ThemeProvider theme={ Theme(context) }>
			<Box role="App" overflow="hidden">
				<Surface { ...context }/>
			</Box>
		</ThemeProvider>
	);
};

export default App;
