<script>
	import { running } from './store.js';
	import Time from './time.js';

	let rawTimeInput = 0.1;
	let time;
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
	<div class="flex overflow-hidden py-2 px-4 bg-green-500 border-2 border-green-800 rounded-full" class:hidden={$running}>
		<input bind:value={rawTimeInput} class="text-xl text-white bg-transparent" />
		<button on:click={start} class="text-green-800 rounded-full">
			<svg class="fill-current h-8 w-8" viewBox="0 0 20 20">
				<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
			</svg>
		</button>
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