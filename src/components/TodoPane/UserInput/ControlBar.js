import FilterButtons from './FilterButtons';
import { React } from 'react';
import { Box } from '@mui/system';
import ClearButton from './ClearButton';
import ThemeButton from '../../../Theme/ThemeButton';

const ControlBar = (context) => {
	const { config: { filters }} = context;

	return (
		<Box sx={ { display: 'flex',
			justifyContent: 'space-between', alignItems: 'center' } }
		>
			<Box className="row">
				{filters.map((filter, index) =>
					<FilterButtons
						key={ index }
						{ ...{ ...context, data: filter } }
					/>)}</Box>
			<Box className="row" sx={ { alignItems: 'center' } }>
				<ClearButton { ...context }/>
				<ThemeButton { ...context }/></Box>
		</Box>);
};

export default ControlBar;
