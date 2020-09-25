<script>
	import { getContext, setContext } from 'svelte';
	import State from './lib/state';
	import Music from './lib/music';
	import Background from './lib/background';

	Background.set("red-800");
	Music.play();

	const config = getContext('config');
	const mobberIndex = config.mobbers.index;

	let nextMobberIndex = mobberIndex + 1;
	if (nextMobberIndex > config.mobbers.list.length - 1)
		nextMobberIndex = 0;

	const nextMobber = config.mobbers.list[nextMobberIndex];

	function next() {
		Music.stop();
		config.mobbers.index = nextMobberIndex;
		setContext('config', config);

		if (config.turnsRemaining > 0)
			State.nextTurn();
		else
			State.finishRotation();
	}
</script>

<svelte:body
	on:mouseenter={Music.stop}
/>

<div class="flex flex-col justify-center">
	<div class="text-4xl text-white text-center uppercase italic">{nextMobber}</div>
	<button class="text-3xl" on:click={next}>🍳</button>
</div>