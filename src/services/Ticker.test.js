import * as random from '@laufire/utils/random';
import Ticker from './Ticker';

test('To check whether tasks are displayed with setInterval correctly', () => {
	const context = { actions: {
		fn: Symbol('fn'),
		AddTasks: jest.fn(),
	},
	config: {
		tasks: [],
		TickerDelay: 1,
	}};
	const task = Symbol('task');
	const setInterval = (fn) => fn();

	jest.spyOn(random, 'rndValue').mockReturnValue(task);
	jest.spyOn(global, 'setInterval').mockImplementation(setInterval);

	Ticker.start(context);

	expect(random.rndValue)
		.toHaveBeenCalledWith(context.config.tasks);
	expect(global.setInterval).toHaveBeenCalledWith(expect.any(Function),
		context.config.TickerDelay);
	expect(context.actions.AddTasks)
		.toHaveBeenCalledWith(task);
});
