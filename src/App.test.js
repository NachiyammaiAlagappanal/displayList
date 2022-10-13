/* eslint-disable react/display-name */
import { render } from '@testing-library/react';
import React from 'react';

jest.mock('./components/TodoPane', () => () => <div role="TodoPane"/>);
jest.mock('./components/TaskPane', () => () => <div role="TaskPane"/>);

import App from './App';
import TaskManager from './services/TaskManager';
import Ticker from './services/Ticker';

test('renders learn react link', () => {
	jest.spyOn(React, 'useEffect');
	jest.spyOn(Ticker, 'start').mockReturnValue();
	jest.spyOn(TaskManager, 'init').mockReturnValue();

	const { getByRole } = render(<App/>);

	expect(getByRole('TodoPane')).toBeInTheDocument();
	expect(getByRole('TaskPane')).toBeInTheDocument();
});
