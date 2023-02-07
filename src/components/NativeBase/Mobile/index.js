import { React } from 'react';
import { TabContext } from '@mui/lab';
import TabPanel from '@mui/lab/TabPanel';
import MenuBar from './MenuBar';
import TodoPane from '../TodoPane';
import TaskPane from '../TaskPane';
import { Box, Stack } from 'native-base';

const Mobile = (context) => {
	const { state: { value }} = context;

	return <Box className="App">
		<TabContext value={ value }>
			<MenuBar { ...context }/>
			<Box width="100%">
				<TabPanel value="1">
					<Stack>
						<TodoPane { ...context }/></Stack>
				</TabPanel>
				<TabPanel value="2">
					<Stack>
						<TaskPane { ...context }/></Stack>
				</TabPanel>
			</Box>
		</TabContext>
	</Box>;
};

export default Mobile;
