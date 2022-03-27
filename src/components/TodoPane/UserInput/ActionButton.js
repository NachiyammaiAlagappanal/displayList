import AddButton from './AddButton';
import EditButton from './EditButton';

const ActionButton = (context) => (context.state.editing
	? EditButton(context)
	: AddButton(context)
);

export default ActionButton;
