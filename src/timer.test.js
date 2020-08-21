const { formatTime, minutesToSeconds } = require('./timer');

test.each([
	[60, "01:00"],
	[30, "00:30"],
	[90, "01:30"]
])
('%i seconds -> %s', (seconds, expected) => {
	expect(formatTime(seconds)).toBe(expected);
});

test.each([
	[1, 60],
	[0.5, 30],
	[3, 180]
])
('%i minutes -> %i seconds', (minutes, expected) => {
	expect(minutesToSeconds(minutes)).toBe(expected);
});