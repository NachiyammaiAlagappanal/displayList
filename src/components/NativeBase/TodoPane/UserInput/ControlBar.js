import FilterButtons from './FilterButtons';
import { React } from 'react';
import ClearButton from './ClearButton';
import { Box, Button } from 'native-base';

const ControlBar = (context) => {
	const { config: { filters }} = context;

	return (
		<Box style={ { display: 'flex', justifyContent: 'space-between',
			flexDirection: 'row', height: '30px' } }
		>
			<Box style={ { display: 'flex',
				flexDirection: 'row' } }
			>
				<Button.Group isAttached={ true }>
					{filters.map((filter, index) =>
						<FilterButtons
							key={ index }
							{ ...{ ...context, data: filter } }
						/>)}</Button.Group></Box>
			<ClearButton { ...context }/>
		</Box>);
};

export default ControlBar;
