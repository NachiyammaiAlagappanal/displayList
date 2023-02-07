import { useMediaQuery } from 'native-base';
import { React } from 'react';
import Mobile from './Mobile';
import Web from './Web';

const Surface = (context) => {
	const [view] = useMediaQuery({ minWidth: 600 });

	return view ? <Web { ...context }/> : <Mobile { ...context }/>;
};

export default Surface;
