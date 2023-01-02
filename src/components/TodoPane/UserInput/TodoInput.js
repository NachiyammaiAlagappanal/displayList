import { TextField } from '@mui/material';
import { React } from 'react';

const getEnterKeyAction = (context) =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: (context) => context.actions[getEnterKeyAction(context)](context),
	Escape: (context) => context.actions.updateInput(''),
};

const InputTextBox = (context) => {
	const { state } = context;

	return (
		<TextField
			variant="standard"
			role="textBox"
			label="Add New Todo"
			value={ state.input }
			sx={ { alignItems: 'center' } }
			onChange={ (evt) => context.actions.updateInput(evt.target.value) }
			onKeyUp={ (evt) => actionKeys[evt.code]
			&& actionKeys[evt.code]({ ...context, data: evt.target.value }) }
		/>);
};

export default InputTextBox;
