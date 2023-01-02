import FilterButtons from './FilterButtons';
import { React } from 'react';
import { Box } from '@mui/system';
import ClearButton from './ClearButton';

const ControlBar = (context) => {
	const { config: { filters }} = context;

	return <Box>
		<Box className="row">
			{filters.map((filter, index) =>
				<FilterButtons
					key={ index }
					{ ...{ ...context, data: filter } }
				/>)}
			<Box style={ { height: '40px' } }>
				<ClearButton { ...context }/></Box>
		</Box></Box>;
};

export default ControlBar;
