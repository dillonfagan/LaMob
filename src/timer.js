import { running } from './store.js';

export const minutesToSeconds = (minutes) => minutes * 60;
const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
const padWithZeroes = (number) => number.toString().padStart(2, '0');

export function formatTime(timeInSeconds) {
	const minutes = secondsToMinutes(timeInSeconds);
	const remainingSeconds = timeInSeconds % 60;
	return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
}

export function reset() {
	running.set(false);
}