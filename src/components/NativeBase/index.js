import { React } from 'react';

import { Box, ThemeProvider } from '@mui/material';
import Surface from './components/MUIcomponents/Surface';
import Theme from './Theme/Theme';

const NativeBaseIndex = (context) =>
	<ThemeProvider theme={ Theme(context) }>
		<Box role="App" overflow="hidden">
			<Surface { ...context }/>
		</Box>
	</ThemeProvider>;

export default NativeBaseIndex;
