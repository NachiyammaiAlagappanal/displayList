import { React } from 'react';
import Tab from '@mui/material/Tab';
import { Toolbar } from '@mui/material';
import { TabList } from '@mui/lab';

const MenuBar = (context) =>
	<Toolbar className="toolbar">
		<TabList
			orientation="horizontal"
			onChange={ (event, tabIndex) => context.actions
				.toggleMenu(tabIndex) }
			textColor="inherit"
		>
			<Tab value="1" label="Todos"/>
			<Tab value="2" label="Tasks"/>
		</TabList>
	</Toolbar>
	;

export default MenuBar;
