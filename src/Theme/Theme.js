/* eslint-disable max-lines-per-function */
import { createTheme } from '@mui/material';
import dark from './Dark';
import light from './Light';
import SwiggyTheme from './SwiggyTheme';
import TodoTheme from './TodoTheme';

const theme = {
	dark: dark,
	light: light,
	swiggy: SwiggyTheme,
	Todo: TodoTheme,
};

const Theme = (context) => createTheme({
	palette: {
		...theme[context.state.theme],
	},
});

export default Theme;
