import { useMediaQuery } from '@mui/material';
import Web from './Web';
import { React } from 'react';
import Mobile from './Mobile';

const Surface = (context) => {
	const view = useMediaQuery('(min-width:600px)');

	return view ? <Web { ...context }/> : <Mobile { ...context }/>;
};

export default Surface;
