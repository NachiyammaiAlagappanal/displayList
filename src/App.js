/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.scss';
import NativeBase from './components/NativeBase';
import TaskManager from '../src/services/TaskManager';
import Ticker from '../src/services/Ticker';
import Mui from './components/MUIcomponents';
import { HStack, NativeBaseProvider } from 'native-base';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);
	return <NativeBaseProvider><HStack><NativeBase { ...context }/>
		<Mui { ...context }/></HStack></NativeBaseProvider>;
};

export default App;
