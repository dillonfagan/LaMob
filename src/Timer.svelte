<script>
	const minutesToSeconds = (minutes) => minutes * 60;
	const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
	const padWithZeroes = (number) => number.toString().padStart(2, '0');

	const lengthInSeconds = minutesToSeconds(1);

	let time = lengthInSeconds;

	function start() {}

	function formatTime(timeInSeconds) {
		const minutes = secondsToMinutes(timeInSeconds);
		const remainingSeconds = timeInSeconds % 60;
		return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
	}
</script>

<section>
	<p class="time">{formatTime(time)}</p>
	<button on:click={start}>Start</button>
</section>

<style>
	.time {
		color:white;
	}
</style>