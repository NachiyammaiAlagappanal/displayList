import FilterButtons from './FilterButtons';
import { React } from 'react';
import { Box } from '@mui/system';
import ClearButton from './ClearButton';

const ControlBar = (context) => {
	const { config: { filters }} = context;

	return <Box className="row">
		{filters.map((filter, index) =>
			<FilterButtons key={ index } { ...{ ...context, data: filter } }/>)}
		<div style={ { width: '50px', height: '50px' } }>
			<ClearButton { ...context }/></div>
	</Box>;
};

export default ControlBar;
