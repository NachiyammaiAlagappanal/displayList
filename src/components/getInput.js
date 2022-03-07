import { React } from 'react';
// import config from '../core/config';
// import context from '../core/context';

const getInput = (context) =>
	<input
		value={ context.state.input }
		onChange={ (evt) => context.actions.updateInput(evt.target.value) }
	/>;

export default getInput;
