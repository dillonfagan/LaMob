<script>
	const minutesToSeconds = (minutes) => minutes * 60;
	const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
	const padWithZeroes = (number) => number.toString().padStart(2, '0');

	let time;
	function initializeTimer() {
		const lengthInSeconds = minutesToSeconds(0.1);
		time = lengthInSeconds;
	}

	initializeTimer();

	let interval;
	function start() {
		interval = setInterval(() => {
			if (time === 0) {
				clearInterval(interval);
				return;
    		}
    		time -= 1;
  		},1000);
	}

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