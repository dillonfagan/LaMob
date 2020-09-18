<script>
	import { getContext, setContext } from 'svelte';
	import State from './state';
	import Music from './music.js';
	import Background from './background';

	Background.set("red-800");
	Music.play();

	const config = getContext('config');
	const mobberIndex = config.mobbers.index;
	const mobber = config.mobbers.list[mobberIndex];
	let nextMobberIndex = mobberIndex + 1;
	if (nextMobberIndex > config.mobbers.list.length - 1)
		nextMobberIndex = 0;
	const nextMobber = config.mobbers.list[nextMobberIndex];

	function next() {
		config.mobbers.index = nextMobberIndex;
		setContext('config', config);

		State.nextTurn();
	}
</script>

<svelte:body
	on:mouseenter={Music.stop}
/>

<div class="text-3xl text-white text-center uppercase italic">{mobber} - {nextMobber}</div>
<button class="bg-white py-2 px-6 rounded-full" on:click={next}>Next</button>