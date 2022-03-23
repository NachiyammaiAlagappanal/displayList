import { React } from 'react';

const actionKeys = {
	Enter: (context) => context.actions.addTodo(),
	Escape: (context) => context.actions.updateInput(''),
};

const inputTextBox = (context) =>
	<input
		value={ context.state.input }
		onChange={ (evt) => context.actions.updateInput(evt.target.value) }
		onKeyUp={ (evt) =>
			actionKeys[evt.code] && actionKeys[evt.code](context) }
	/>;

export default inputTextBox;
