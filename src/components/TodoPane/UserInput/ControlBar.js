import FilterButtons from './FilterButtons';
import { React } from 'react';
import { Box } from '@mui/system';
import ClearButton from './ClearButton';
import ThemeButton from '../../../Theme/ThemeButton';

const ControlBar = (context) => {
	const { config: { filters }} = context;

	return <Box sx={ { display: 'flex', justifyContent: 'space-between' } }>
		<Box className="row">
			{filters.map((filter, index) =>
				<FilterButtons
					key={ index }
					{ ...{ ...context, data: filter } }
				/>)}<ClearButton { ...context }/></Box>
		<Box style={ { height: '40px' } }><ThemeButton { ...context }/></Box>
	</Box>;
};

export default ControlBar;
