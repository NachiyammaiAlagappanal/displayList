/* eslint-disable no-mixed-spaces-and-tabs */
import { MenuItem, Select } from '@mui/material';
import { React } from 'react';

const ThemeDropDown = (context) => {
	const { config: { modes }, state: { theme }} = context;

	return <Select
		value={ theme }
		sx={ { backgroundColor: 'primary.main', color: 'white',
			height: '40%' } }
		onChange={ (evt) => context.actions.toggleMode(evt.target.value) }
	       >{
			modes.map((mode) =>
				<MenuItem key={ mode } value={ mode }>{mode}</MenuItem>)
		}</Select>;
};

export default ThemeDropDown;
