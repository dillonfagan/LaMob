export default class Time {
    static minutesToSeconds = (minutes) => minutes * 60;
    static secondsToMinutes = (seconds) => Math.floor(seconds / 60);
    static padWithZeroes = (number) => number.toString().padStart(2, '0');

    static format(timeInSeconds) {
		const minutes = Time.secondsToMinutes(timeInSeconds);
		const remainingSeconds = timeInSeconds % 60;
		return `${Time.padWithZeroes(minutes)}:${Time.padWithZeroes(remainingSeconds)}`;
	}
}