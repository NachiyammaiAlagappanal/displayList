import { Fragment, React } from 'react';
import ClearButton from './ClearButton.js';
import FilterBar from './FilterBar.js';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';
import ActionButton from './ActionButton.js';

// TODO: USE MAP
const TodoInputs = (context) => <>
	<ToggleAllButton { ...context }/>
	<TodoInput { ...context }/>
	<ActionButton { ...context }/>
</>;

// TODO: USE MAP
const UserInput = (context) =>
	<div role="UserInput">
		<div>
			<TodoInputs { ...context }/>
		</div>
		<div>
			<ClearButton { ...context }/>
		</div>
		<div>
			<FilterBar { ...context }/>
		</div>
	</div>;

export default UserInput;
