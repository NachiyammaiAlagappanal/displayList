/* eslint-disable max-lines-per-function */
import { createTheme } from '@mui/material';
import dark from './Dark';
import light from './Light';

const theme = {
	dark,
	light,
};

const Theme = (context) => createTheme({
	palette: {
		...theme[context.state.theme],
	},
});

export default Theme;
