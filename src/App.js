/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import NativeBaseIndex from './components/NativeBase/index';
import TaskManager from '../src/services/TaskManager';
import Ticker from '../src/services/Ticker';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	return <NativeBaseIndex { ...context }/>;
};

export default App;
