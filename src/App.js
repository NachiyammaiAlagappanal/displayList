/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
import TodoPane from './components/TodoPane/index.js';
import './App.scss';
import TaskPane from './components/TaskPane/index.js';

const App = (context) => {
	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div className="App" role="App">
			<div>{ TodoPane(context) }</div>
			<div>{ TaskPane() }</div>
		</div>
	);
};

export default App;
