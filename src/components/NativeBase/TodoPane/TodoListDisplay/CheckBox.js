/* eslint-disable id-length */
import { React } from 'react';
import { Checkbox } from 'native-base';

const CheckBox = ({ actions, data: { todo: { completed }, todo }}) =>
	<Checkbox
		margin="10px"
		role="CheckBox"
		accessibilityLabel="todoCheckBox"
		size="sm"
		isChecked={ completed }
		onChange={ () => actions.toggleTodo(todo) }
	/>;

export default CheckBox;
