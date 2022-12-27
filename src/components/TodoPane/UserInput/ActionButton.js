import AddButton from './AddButton';
import EditButton from './EditButton';
import { React } from 'react';

const ActionButton = (context) => {
	const { state } = context;

	return state.editing
		? <EditButton { ...context }/>
		: <AddButton { ...context }/>
	;
};

export default ActionButton;
