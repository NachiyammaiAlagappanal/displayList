import { React } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Theme from '../../Theme/Theme';
import Surface from './Surface';

const Mui = (context) =>
	<ThemeProvider theme={ Theme(context) }>
		<Box role="App" overflow="hidden">
			<Surface { ...context }/>
		</Box>
	</ThemeProvider>;

export default Mui;
