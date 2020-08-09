<script>
	import { running } from './store.js';
	import Time from './time.js';

	let rawTimeInput = 0.1;
	let time = Time.minutesToSeconds(0);
	let interval;

	function start() {
		running.set(true);
		time = Time.minutesToSeconds(rawTimeInput);

		interval = setInterval(() => {
			if (time === 0) {
				clearInterval(interval);
				return;
    		}
    		time -= 1;
		},1000);
	}

	function reset() {
		running.set(false);
	}
</script>

<section>
	<div class="text-3xl text-white w-full text-center">{Time.format(time)}</div>
	<input id="time-input" bind:value={rawTimeInput} class="py-2 px-4 text-xl text-white bg-transparent border-b-2" />
	<button id="button" on:click={$running ? reset : start} class="bg-white py-2 px-6 mt-4 rounded-full">{$running ? `Reset` : `Start`}</button>
</section>