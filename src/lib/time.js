const minutesToSeconds = (minutes) => minutes * 60;
const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
const padWithZeroes = (number) => number.toString().padStart(2, '0');

function formatTime(timeInSeconds) {
	const minutes = secondsToMinutes(timeInSeconds);
	const remainingSeconds = timeInSeconds % 60;
	return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
}

function calculateTurns(turnLength) {
	return Math.floor(50 / turnLength);
}

module.exports = { minutesToSeconds, formatTime, calculateTurns }