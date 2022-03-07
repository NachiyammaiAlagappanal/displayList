import { React } from 'react';

// const style = {
// 	height: '1em',
// };

const Todo = (todo) => {
	const { text } = todo;

	return (
		<div>{ text } </div>
	);
};

export default Todo;
