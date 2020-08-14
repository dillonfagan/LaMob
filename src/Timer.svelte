<script>
	import { running, waiting } from './store.js';
	import { minutesToSeconds, formatTime } from './timer.js'

	let time = minutesToSeconds(0);
	let interval;
	let timeInput = 7;

	function start() {
		running.set(true);
		waiting.set(false);
		time = minutesToSeconds(timeInput);

		interval = setInterval(() => {
			if (time === 0) {
				clearInterval(interval);
				waiting.set(true);
				return;
    		}
    		time -= 1;
		},1000);
	}
</script>

<section>
	<div class="text-6xl text-white w-full text-center" class:hidden={!$running}>{formatTime(time)}</div>
	<div class:hidden={$running}>
		<input bind:value={timeInput} class="py-2 px-4 text-xl text-white bg-transparent border-b-2" />
		<button on:click={start} class="bg-white py-2 px-6 mt-4 rounded-full">Start</button>
	</div>
	<div class="w-full h-16 flex justify-center mt-4 items-center">
		<button class:hidden={!$waiting} class="bg-white py-2 px-6 rounded-full" on:click={start}>Next</button>
	</div>
</section>

<style>
	.hidden {
		@apply hidden;
	}
</style>