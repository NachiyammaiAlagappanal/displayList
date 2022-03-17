import { React } from 'react';
import context from '../core/context';

const ClearButton = () =>
	<button
		onClick={ () => context.actions.ClearCompleted() }
	> Clear completed </button>;

export default ClearButton;
