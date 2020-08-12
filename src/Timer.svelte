<script>
	import { running, mobbers } from './store.js';
	import Time from './time.js';
	import Field from './Field.svelte';
	import TurnIndicator from './TurnIndicator.svelte';

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
	
	<TurnIndicator bind:mobber bind:nextMobber on:click={next} hidden={!waiting} color="purple" />

	<Field placeholder="Mobbers" bind:value={rawMobbersInput} hidden={$running} color="green" />

	<Field bind:value={rawTimeInput} on:click={start} hidden={$running} color="green">
		<path slot="icon" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
	</Field>
</section>

<style>
	.hidden {
		@apply hidden;
	}
</style>