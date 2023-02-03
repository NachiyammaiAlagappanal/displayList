/* eslint-disable id-length */
import { React } from 'react';
import { Checkbox } from 'native-base';

const CheckBox = ({ actions, data: { todo: { completed }, todo }}) =>
	<Checkbox
		margin="10px"
		role="CheckBox"
		size="sm"
		isDefaultChecked={ completed }
		onChange={ () => actions.toggleTodo(todo) }
	/>;

export default CheckBox;
