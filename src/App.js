/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';
import { Box, useMediaQuery } from '@mui/material';
import Menu from './components/mobileView';
import Frame from './components';

const GetSurface = (context) => {
	const matches = useMediaQuery('(min-width:600px)');

	return matches ? <Frame { ...context }/> : <Menu { ...context }/>;
};

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	console.log(context);
	return (
		<Box role="App">
			<GetSurface { ...context }/>
		</Box>
	);
};

export default App;
