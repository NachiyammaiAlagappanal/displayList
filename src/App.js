/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import { React, useEffect } from 'react';
import TodoPane from './components/TodoPane/index.js';
import './App.scss';
import TaskPane from './components/TaskPane/index.js';
import TaskManager from './services/TaskManager.js';
import Ticker from './services/Ticker.js';
import { Box, Grid, Paper } from '@mui/material';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	console.log(context);

	return (
		<Box role="App">
			<Grid container={ true } sx={ { height: '100vh' } }>
				<Grid item={ true } xs={ 6 } sx={ { background: '#24324bfa' } }>
					<Paper
						sx={ {
							height: '80%',
							width: '80%',
							margin: '10%',
							backgroundColor: 'BISQUE',
							// border: '2px solid Chocolate',
						} }
					><TodoPane { ...context }/></Paper>
				</Grid>
				<Grid item={ true } xs={ 6 }>
					<Paper
						sx={ {
							height: 140,
							width: 100,
						} }
					><TaskPane { ...context }/></Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default App;
