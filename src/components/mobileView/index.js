import { React } from 'react';
import { TabContext } from '@mui/lab';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/system';
import MenuBar from './MenuBar';
import { Grid } from '@mui/material';
import TodoPaneFrame from '../TodoPaneFrame';
import TaskPaneFrame from '../TaskPaneFrame';

const Menu = (context) => {
	const { state: { value }} = context;

	return <Box className="App">
		<TabContext value={ value }>
			<MenuBar { ...context }/>
			<Box width="100%">
				<TabPanel value="1">
					<Grid container={ true } sx={ { height: '100vh' } }>
						<TodoPaneFrame { ...context }/></Grid>
				</TabPanel>
				<TabPanel value="2">
					<Grid container={ true } sx={ { height: '100vh' } }>
						<TaskPaneFrame { ...context }/></Grid>
				</TabPanel>
			</Box>
		</TabContext>
	</Box>;
};

export default Menu;
