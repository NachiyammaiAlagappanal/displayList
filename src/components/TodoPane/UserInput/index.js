import { React } from 'react';
import AddButton from './AddButton.js';
import ClearButton from './ClearButton.js';
import EditButton from './EditButton.js';
import FilterBar from './FilterBar.js';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';

const UserInput = (context) =>
	<div>
		<div>	{ ToggleAllButton(context) }
			{	TodoInput(context) }
			{ AddButton(context) }
			{ EditButton(context) }
		</div>
		<div>{ ClearButton(context) }</div>
		<div>	{ FilterBar(context) }</div>
	</div>;

export default UserInput;
