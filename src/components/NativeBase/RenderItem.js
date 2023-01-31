import { React } from 'react';
// eslint-disable-next-line react/display-name
const renderItem = (context) => (Component, key) =>
	<Component key={ key }{ ...context }/>;

export default renderItem;
