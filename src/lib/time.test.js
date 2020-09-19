const { formatTime, minutesToSeconds } = require('./timer');

test.each([
	[0, "00:00"],
	[60, "01:00"],
	[30, "00:30"],
	[90, "01:30"]
])
('%i seconds -> %s', (seconds, expected) => {
	expect(formatTime(seconds)).toBe(expected);
});

test.each([
	[0, 0],
	[1, 60],
	[0.5, 30],
	[3, 180]
])
('%i minutes -> %i seconds', (minutes, expected) => {
	expect(minutesToSeconds(minutes)).toBe(expected);
});

test('turns', () => {
	const turnLength = 7;
	const numberOfTurns = Math.floor(50 / turnLength);
	const eggs = '🥚'.repeat(numberOfTurns);

	expect(eggs).toBe('🥚🥚🥚🥚🥚🥚🥚');
});