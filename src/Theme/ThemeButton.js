/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { React } from 'react';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

const ThemeButton = (context) => {
	const { state: { themeButton, theme }, actions,
		config: { modes }} = context;

	return <Box>
		<Button
			onClick={ (evt) => actions.toggleTheme(evt.currentTarget) }
			color="heading"
			sx={ { '&:hover': { color: 'text.contrast' }} }
		><SettingsBrightnessIcon/></Button>
		<Menu
			open={ themeButton }
			value={ theme }
			anchorEl={ themeButton }
			anchorOrigin={ { vertical: 'top', horizontal: 'left' } }
			transformOrigin={ { vertical: 'top', horizontal: 'right' } }
		>
			{modes.map((mode) =>
				<MenuItem
					key={ mode }
					value={ theme }
					onClick={ () =>	context.actions
						.toggleMode(mode) }
				>
					{mode}</MenuItem>)}</Menu>
	</Box>;
};

export default ThemeButton;
