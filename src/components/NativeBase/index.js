/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import { React } from 'react';
import { Button, Box, NativeBaseProvider, AddIcon, Input } from 'native-base';

const NativeBaseIndex = (context) => {
	const { actions, state: { input }} = context;

	return <NativeBaseProvider><Box alignItems="center">
		<Button
			// isDisabled={ TodoManager.hasInput(input) }
			onPress={ () => actions.addTodo(input) }
			variant="unstyled"
			_hover={ {
				bg: 'primary.700',
			} }
			bg="primary.100"
		>
			<AddIcon name="add"/></Button>
		<Input
			placeholder="Add New Todo"
			onPress={ (evt) => context.actions
				.updateInput(evt.target.value) }
			variant="unstyled"
		/>
	</Box></NativeBaseProvider>;
};

export default NativeBaseIndex;
