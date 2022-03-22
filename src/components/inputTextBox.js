import { React } from 'react';

const inputTextBox = (context) =>
	<input
		value={ context.state.input }
		onChange={ (evt) => context.actions.updateInput(evt.target.value) }
	/>;

export default inputTextBox;
