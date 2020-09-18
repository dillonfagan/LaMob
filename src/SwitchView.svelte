<script>
	import { getContext, setContext } from 'svelte';
	import State from './state';
	import Music from './music.js';
	import Background from './background';

	Background.set("red-700");
	Music.play();

	const config = getContext('config');
	const mobberIndex = config.mobbers.index;
	const mobber = config.mobbers.list[mobberIndex];
	const nextMobber = config.mobbers.list[mobberIndex + 1];

	function next() {
		config.mobbers.index += 1;
		setContext('config', config);

		State.nextTurn();
	}
</script>

<svelte:body
	on:mouseenter={Music.stop}
/>

<div class="text-3xl text-white text-center uppercase italic">{mobber} - {nextMobber}</div>
<button class="bg-white py-2 px-6 rounded-full" on:click={next}>Next</button>