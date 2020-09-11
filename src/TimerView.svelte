<script>
	import { onDestroy } from 'svelte';
	import { minutesToSeconds, formatTime } from './timer';
	import State from './state';
	import Music from './music.js';

	let time;
	let interval = setInterval(() => {
		if (time === 0) {
			Music.play();
			clearInterval(interval);
			return;
		}
		time -= 1;
	}, 1000);

	const unsubscribe = State.turnLength.subscribe(minutes => {
		time = minutesToSeconds(minutes);
	});

	onDestroy(unsubscribe);
</script>

<svelte:body
	on:mouseenter={Music.stop}
/>

<div class="text-6xl text-white w-full text-center">{formatTime(time)}</div>