const { formatTime } = require('./timer');

test.each([
	[60, "01:00"],
	[30, "00:30"],
	[90, "01:30"]
])
('%i seconds -> %s', (seconds, expected) => {
	expect(formatTime(seconds)).toBe(expected);
});