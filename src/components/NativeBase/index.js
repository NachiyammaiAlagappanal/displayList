/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import { NativeBaseProvider } from 'native-base';
import { React } from 'react';
import Frame from './Web';

const NativeBaseIndex = (context) =>
	<NativeBaseProvider><Frame { ...context }/></NativeBaseProvider>;

export default NativeBaseIndex;
