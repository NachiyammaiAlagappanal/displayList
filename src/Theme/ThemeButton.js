/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { Button, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { React } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ThemeButton = (context) => {
	const { state: { themeButton, theme }, actions,
		config: { modes }} = context;

	return <Box>
		<Button
			onClick={ (evt) => actions.toggleTheme(evt.currentTarget) }
			sx={ { color: 'text.contrast' } }
		><ExpandMoreIcon/></Button>
		<Menu
			open={ themeButton }
			value={ theme }
			anchorEl={ themeButton }
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
