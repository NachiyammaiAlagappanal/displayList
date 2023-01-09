/* eslint-disable max-lines-per-function */
import { createTheme } from '@mui/material';
import dark from './Dark';
import light from './Light';

const Theme = (context) => createTheme({
	palette: {
		mode: context.state.theme,
		...context.state.theme === 'dark' ? dark : light,
	},
});

export default Theme;
