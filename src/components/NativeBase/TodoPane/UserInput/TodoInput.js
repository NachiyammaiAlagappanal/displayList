import { InputBase } from '@mui/material';
import { React } from 'react';

const getEnterKeyAction = (context) =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: (context) =>
		context.actions[getEnterKeyAction(context)](context.data),
	Escape: (context) => context.actions.updateInput(''),
};

const InputTextBox = (context) => {
	const { state } = context;

	return (
		<InputBase
			variant="standard"
			autoComplete="off"
			role="textBox"
			placeholder="Add New Todo"
			sx={ { width: '42vw' } }
			value={ state.input }
			onChange={ (evt) => context.actions
				.updateInput(evt.target.value) }
			onKeyUp={ (evt) => actionKeys[evt.code]
			&& actionKeys[evt.code]({ ...context, data: state.input }) }
		/>);
};

export default InputTextBox;
