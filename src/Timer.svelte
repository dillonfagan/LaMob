<script>
	import { running } from './store.js';

	const minutesToSeconds = (minutes) => minutes * 60;
	const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
	const padWithZeroes = (number) => number.toString().padStart(2, '0');

	let rawTimeInput = 0.1;
	let time = minutesToSeconds(0);
	let interval;

	function start() {
		running.set(true);
		time = minutesToSeconds(rawTimeInput);

		interval = setInterval(() => {
			if (time === 0) {
				stopTimer(interval);
				return;
    		}
    		time -= 1;
		},1000);
	}

	function stopTimer(interval) {
		clearInterval(interval);
	}

	function reset() {
		running.set(false);
	}

	function formatTime(timeInSeconds) {
		const minutes = secondsToMinutes(timeInSeconds);
		const remainingSeconds = timeInSeconds % 60;
		return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
	}
</script>

<section>
	<div class="text-3xl text-white w-full text-center">{formatTime(time)}</div>
	<input id="time-input" bind:value={rawTimeInput} class="py-2 px-4 text-xl text-white bg-transparent border-b-2" />
	<button id="button" on:click={$running ? reset : start} class="bg-white py-2 px-6 mt-4 rounded-full">{$running ? `Reset` : `Start`}</button>
</section>