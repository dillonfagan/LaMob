const { formatTime, minutesToSeconds, calculateTurns } = require('./time');

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

test.each([
	[7, 7],
	[8, 6],
	[6, 8]
])
('turns', (minutes, expected) => {
	expect(calculateTurns(minutes)).toBe(expected);
});