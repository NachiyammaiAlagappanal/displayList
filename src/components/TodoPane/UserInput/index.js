import { React } from 'react';
import ClearButton from './ClearButton.js';
import FilterBar from './FilterBar.js';
import TodoInput from './TodoInput.js';
import ToggleAllButton from './ToggleAllButton.js';
import ActionButton from './ActionButton.js';
import renderItem from '../../RenderItem.js';

const Fields = [ToggleAllButton, TodoInput, ActionButton];

const TodoInputs = (context) =>
	Fields.map((Component, field) =>
		renderItem({ ...context })(Component, field));

const userInputs = [TodoInputs, ClearButton, FilterBar];

const UserInputs = (context) =>
	<div role="UserInput">
		{userInputs.map((Component, field) =>
			<div key={ field }>
				{renderItem({ ...context })(Component, field)}</div>)}
	</div>;

export default UserInputs;
