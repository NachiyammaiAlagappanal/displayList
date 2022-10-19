import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import * as TodoPane from './components/TodoPane/index.js';
import TaskManager from './services/TaskManager';
import Ticker from './services/Ticker';
import * as TaskPane from './components/TaskPane/index.js';
// import context from './core/context';

test('renders learn react link', () => {
	jest.spyOn(React, 'useEffect').mockImplementation((fn) => fn());
	jest.spyOn(Ticker, 'start').mockReturnValue();
	jest.spyOn(TaskManager, 'init').mockReturnValue();
	jest.spyOn(TodoPane, 'default').mockReturnValue(<div role="TodoPane"/>);
	jest.spyOn(TaskPane, 'default').mockReturnValue(<div role="TaskPane"/>);

	const { getByRole } = render(<App/>);

	expect(getByRole('TodoPane')).toBeInTheDocument();
	expect(getByRole('TaskPane')).toBeInTheDocument();
	expect(getByRole('App')).toBeInTheDocument();
	expect(React.useEffect).toHaveBeenCalledWith(expect.any(Function), []);
	// expect(TodoPane.default).toHaveBeenCalledWith(context, {});
	// expect(TaskPane.default).toHaveBeenCalledWith(context, {});
});
