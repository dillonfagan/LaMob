<script>
	import { running, mobbers } from './store.js';
	import Time from './time.js';
	import Field from './Field.svelte';

	let rawTimeInput = 0.1;
	let rawMobbersInput = "";
	let time;
	let interval;
	
	let waiting = false;
	let mobberIndex = 0;
	let mobber;
	let nextMobber;

	function next() {
		waiting = false;
		time = Time.minutesToSeconds(rawTimeInput);
		mobber = $mobbers[mobberIndex];

		interval = setInterval(() => {
			if (time === 0) {
				clearInterval(interval);
				if (mobberIndex < $mobbers.length - 1) {
					mobberIndex++;
					nextMobber = $mobbers[mobberIndex];
					waiting = true;
				}
				else {
					running.set(false);
				}
				return;
    		}
    		time -= 1;
		},1000);
	}

	function start() {
		mobbers.set(listMobbers());
		running.set(true);
		next();
	}

	function listMobbers() {
		if (!rawMobbersInput.includes(','))
			return [rawMobbersInput.trim()]
		return rawMobbersInput
			.replaceAll(' ', '')
			.split(',');
	}
</script>

<section>
	<div class="text-5xl text-white w-full text-center" class:hidden={!$running}>{Time.format(time)}</div>
	<div class="text-3xl text-purple-900 w-full text-center" class:hidden={(!$running || waiting)}>{mobber}</div>
	<div class="w-full flex overflow-hidden py-2 px-4 bg-purple-600 border-2 border-purple-900 rounded-full" class:hidden={!waiting}>
		<div class="text-xl text-white">{mobber}</div>
		<button on:click={next} class="text-purple-900 hover:text-white mx-2 rounded-full">
			<svg class="fill-current h-8 w-8" viewBox="0 0 20 20">
				<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
			</svg>
		</button>
		<div class="text-xl text-white">{nextMobber}</div>
	</div>

	<div class="flex overflow-hidden py-2 px-4 mb-4 bg-green-500 border-2 border-green-800 rounded-full" class:hidden={$running}>
		<input type="text" placeholder="Mobbers" bind:value={rawMobbersInput} class="text-xl text-white placeholder-green-800 bg-transparent outline-none" />
	</div>

	<Field bind:value={rawTimeInput} on:click={start} hidden={$running} color="green">
		<path slot="icon" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
	</Field>
</section>

<style>
	.hidden {
		@apply hidden;
	}
</style>