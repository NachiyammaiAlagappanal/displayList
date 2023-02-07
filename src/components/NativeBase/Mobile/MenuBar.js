import { React } from 'react';
import Tab from '@mui/material/Tab';
import { TabList } from '@mui/lab';
import { Heading } from 'native-base';

const MenuBar = (context) =>
	<Heading className="toolbar">
		<TabList
			orientation="horizontal"
			onChange={ (event, tabIndex) => context.actions
				.toggleMenu(tabIndex) }
			textColor="inherit"
		>
			<Tab value="1" label="Todos"/>
			<Tab value="2" label="Tasks"/>
		</TabList>
	</Heading>
	;

export default MenuBar;
