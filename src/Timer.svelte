<script>
	const minutesToSeconds = (minutes) => minutes * 60;
	const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
	const padWithZeroes = (number) => number.toString().padStart(2, '0');

	let time;
	function initializeTimer() {
		const lengthInSeconds = minutesToSeconds(0.1);
		time = lengthInSeconds;
	}

	function stopTimer(interval) {
		clearInterval(interval);
		document.getElementById("main")
			.style
			.backgroundColor = "#b33939";
	}

	initializeTimer();

	let interval;
	function start() {
		document.getElementById("main")
			.style
			.backgroundColor = "#474787";

		interval = setInterval(() => {
			if (time === 0) {
				stopTimer(interval);
				return;
    		}
    		time -= 1;
  		},1000);
	}
	function reset() {
		location.reload();
	}

	function formatTime(timeInSeconds) {
		const minutes = secondsToMinutes(timeInSeconds);
		const remainingSeconds = timeInSeconds % 60;
		return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
	}
</script>

<section>
	<h2 class="time">{formatTime(time)}</h2>
	<button on:click={start}>Start</button>
	<button on:click={reset}>Reset</button>
</section>

<style>
	.time {
		color: white;
		font-weight: normal;
		font-style: italic;
	}
</style>