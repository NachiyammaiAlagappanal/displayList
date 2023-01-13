/* eslint-disable max-lines-per-function */
import { createTheme } from '@mui/material';
import dark from './Dark';
import light from './Light';
import SwiggyTheme from './SwiggyTheme';

const theme = {
	dark: dark,
	light: light,
	swiggy: SwiggyTheme,
};

const Theme = (context) => createTheme({
	palette: {
		...theme[context.state.theme],
	},
});

export default Theme;
