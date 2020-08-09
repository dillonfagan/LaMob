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
				running.set(false);
				return;
    		}
    		time -= 1;
		},1000);
	}
</script>

<section>
	<div class="text-3xl text-white w-full text-center" class:big={$running} class:hidden={!$running}>{Time.format(time)}</div>
	<div class:hidden={$running}>
		<input bind:value={rawTimeInput} class="py-2 px-4 text-xl text-white bg-transparent border-b-2" />
		<button on:click={start} class="bg-white py-2 px-6 rounded-full">Start</button>
	</div>
</section>

<style>
	.hidden {
		@apply hidden;
	}

	.big {
		@apply text-5xl;
	}
</style>