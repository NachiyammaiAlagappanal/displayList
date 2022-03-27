import { React } from 'react';
import ClearButton from './ClearButton.js';
import FilterBar from './FilterBar.js';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';
import ActionButton from './ActionButton.js';

const UserInput = (context) =>
	<div>
		<div>	{ ToggleAllButton(context) }
			{	TodoInput(context) }
			{ ActionButton(context) }
		</div>
		<div>{ ClearButton(context) }</div>
		<div>	{ FilterBar(context) }</div>
	</div>;

export default UserInput;
