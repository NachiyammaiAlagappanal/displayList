/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';
import { Box, useMediaQuery } from '@mui/material';
import Menu from './components/mobileView';
import Frame from './components';

const getSurface = () => {
	const matches = useMediaQuery('(min-width:600px)');

	console.log(matches);
	return matches;
};

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	console.log(context);
	return (
		<Box role="App">
			{ getSurface() ? <Frame { ...context }/> : <Menu { ...context }/>}
		</Box>
	);
};

export default App;
