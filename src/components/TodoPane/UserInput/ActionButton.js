import AddButton from './AddButton';
import EditButton from './EditButton';

// TODO: use component style
const ActionButton = (context) => (context.state.editing
	? EditButton(context)
	: AddButton(context)
);

export default ActionButton;
