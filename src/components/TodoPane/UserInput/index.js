import { React } from 'react';
import ClearButton from './ClearButton.js';
import FilterBar from './FilterBar.js';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';
import ActionButton from './ActionButton.js';

const Fields = [ToggleAllButton, TodoInput, ActionButton];

// eslint-disable-next-line react/display-name
const renderItem = (context) => (Component, key) =>
	<Component key={ key }{ ...context }/>;

const TodoInputs = (context) =>
	Fields.map((Component, field) =>
		renderItem({ ...context })(Component, field));

const userInput = [TodoInputs, ClearButton, FilterBar];

const UserInput = (context) =>
	<div role="UserInput">
		<div>
			{userInput.map((Component, field) =>
				<div key={ field }>
					{renderItem({ ...context })(Component, field)}</div>)}
		</div>
	</div>;

export default UserInput;
