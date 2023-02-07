import { React } from 'react';
import { TabContext } from '@mui/lab';
import TabPanel from '@mui/lab/TabPanel';
import MenuBar from './MenuBar';
import { Box, Grid } from '@mui/material';
import TodoPane from '../TodoPane';
import TaskPane from '../TaskPane';

const Mobile = (context) => {
	const { state: { value }} = context;

	return <Box className="App">
		<TabContext value={ value }>
			<MenuBar { ...context }/>
			<Box width="100%">
				<TabPanel value="1">
					<Grid container={ true } sx={ { height: '100vh' } }>
						<TodoPane { ...context }/></Grid>
				</TabPanel>
				<TabPanel value="2">
					<Grid container={ true } sx={ { height: '100vh' } }>
						<TaskPane { ...context }/></Grid>
				</TabPanel>
			</Box>
		</TabContext>
	</Box>;
};

export default Mobile;
