import { Box, NativeBaseProvider } from 'native-base';
import { React } from 'react';
import Surface from './Surface';

const NativeBase = (context) =>
	<NativeBaseProvider><Box role="App" overflow="hidden">
		<Surface { ...context }/>
	</Box></NativeBaseProvider>;

export default NativeBase;
