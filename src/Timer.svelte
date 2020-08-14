<script>
	import { running } from './store.js';
	import { minutesToSeconds, formatTime, reset } from './timer.js'

	let time;
	let interval;
	let timeInput = 0.1;

	initializeTimer();

	function initializeTimer() {
		const lengthInSeconds = minutesToSeconds(0);
		time = lengthInSeconds;
	}

	function start() {
		running.set(true);
		time = minutesToSeconds(timeInput);

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
</script>

<section>
	<div class="text-3xl text-white w-full text-center">{formatTime(time)}</div>
	<input bind:value={timeInput} class="py-2 px-4 text-xl text-white bg-transparent border-b-2" />
	<button id="button" on:click={$running ? reset : start} class="bg-white py-2 px-6 mt-4 rounded-full">{$running ? `Reset` : `Start`}</button>
</section>