import { useMediaQuery } from '@mui/material';
import Frame from './index';
import { React } from 'react';
import Menu from './mobileView';

const GetSurface = (context) => {
	const matches = useMediaQuery('(min-width:600px)');

	return matches ? <Frame { ...context }/> : <Menu { ...context }/>;
};

export default GetSurface;
