<script>
	import { getContext, onDestroy } from 'svelte';
	import { minutesToSeconds, formatTime } from './timer';
	import State from './state';
	import Music from './music.js';
	import Background from './background';

	Background.set("purple-700");
	const config = getContext('config');
	const mobberIndex = config.mobbers.index;
	const mobber = config.mobbers.list[mobberIndex];

	let time = minutesToSeconds(config.turnLength);
	let interval = setInterval(() => {
		if (time === 0) {
			Music.play();
			clearInterval(interval);
			Background.set("red-700")
			return;
		}
		time -= 1;
	}, 1000);
</script>

<svelte:body
	on:mouseenter={Music.stop}
/>
<div class="text-3xl text-white text-center uppercase italic">{mobber}</div>
<div class="text-6xl text-white w-full text-center">{formatTime(time)}</div>