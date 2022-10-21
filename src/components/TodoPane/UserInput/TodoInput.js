import { React } from 'react';
import TodoManager from '../../../services/TodoManager';

const getEnterKeyAction = (context) =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: (context) => {
		const { state: { input }} = context;

		// eslint-disable-next-line no-console
		console.log(input);
		return TodoManager[getEnterKeyAction(context)]({
			...context,
			data: input,
		});
	},
	Escape: (context) => context.actions.updateInput(''),
};

const InputTextBox = (context) => {
	const { state } = context;

	return (
		<input
			role="textBox"
			value={ state.input }
			onChange={ (evt) => context.actions.updateInput(evt.target.value) }
			onKeyUp={ (evt) => !TodoManager.hasInput(evt.target.value)
				&& actionKeys[evt.code]
			&& actionKeys[evt.code](context) }
		/>);
};

export default InputTextBox;
