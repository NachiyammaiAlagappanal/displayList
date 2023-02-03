import FilterButtons from './FilterButtons';
import { React } from 'react';
import ClearButton from './ClearButton';
import { Box } from '@mui/material';

const ControlBar = (context) => {
	const { config: { filters }} = context;

	return (
		<Box sx={ { display: 'flex',
			justifyContent: 'space-between', alignItems: 'center',
			position: ' sticky', top: '0',
			backgroundColor: 'background.default' } }
		>
			<Box className="row">
				{filters.map((filter, index) =>
					<FilterButtons
						key={ index }
						{ ...{ ...context, data: filter } }
					/>)}</Box>
			<Box className="row" sx={ { alignItems: 'center' } }>
				<ClearButton { ...context }/></Box>
		</Box>);
};

export default ControlBar;
