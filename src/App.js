/* eslint-disable react/destructuring-assignment */
import { React } from 'react';
import TodoPane from './components/TodoPane.js';
import './App.scss';

const App = (context) => {
	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div className="App" role="App">
			<div>{ TodoPane(context) }</div>
		</div>
	);
};

export default App;
