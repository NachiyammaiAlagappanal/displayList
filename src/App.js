/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import NativeBase from './components/NativeBase';
import TaskManager from '../src/services/TaskManager';
import Ticker from '../src/services/Ticker';
import Mui from './components/MUIcomponents';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	return <div><NativeBase { ...context }/>
		<Mui { ...context }/></div>;
};

export default App;
