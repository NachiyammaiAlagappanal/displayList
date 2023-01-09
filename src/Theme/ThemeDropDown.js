/* eslint-disable no-mixed-spaces-and-tabs */
import { peek } from '@laufire/utils/debug';
import { MenuItem, Select } from '@mui/material';
import { React } from 'react';

const ThemeDropDown = (context) => {
	const { config: { modes }, state: { theme }} = context;

	return <Select
		value={ theme }
		onChange={ (evt) => context.actions.toggleMode(peek(evt.target.value)) }
	       >{
			modes.map((mode) =>
				<MenuItem key={ mode } value={ mode }>{mode}</MenuItem>)
		}</Select>;
};

export default ThemeDropDown;
