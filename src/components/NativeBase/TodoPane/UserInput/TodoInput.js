import { Input } from 'native-base';
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
		<Input
			variant="unstyled"
			autoComplete="off"
			role="textBox"
			placeholder="Add New Todo"
			flexGrow="1"
			value={ state.input }
			onChange={ (evt) => context.actions
				.updateInput(evt.target.value) }
			onKeyPress={ (evt) => actionKeys[evt.code]
			&& actionKeys[evt.code]({ ...context, data: state.input }) }
		/>);
};

export default InputTextBox;
