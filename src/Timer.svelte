<script>
	import { running, waiting} from './store.js';
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
		waiting.set(false);
		time = minutesToSeconds(timeInput);

		interval = setInterval(() => {
			if (time === 0) {
				stopTimer(interval);
				waiting.set(true);
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
	<div class:hidden={$running}>
		<input bind:value={timeInput} class="py-2 px-4 text-xl text-white bg-transparent border-b-2" />
		<button id="button" on:click={$running ? reset : start} class="bg-white py-2 px-6 mt-4 rounded-full">{$running ? `Reset` : `Start`}</button>
	</div>
	<div class="w-full flex justify-center" class:hidden={!$waiting}>
		<button class="bg-white py-2 px-6 mt-4 rounded-full" on:click={start}>Next</button>
	</div>
</section>

<style>
	.hidden {
		@apply hidden;
	}
</style>