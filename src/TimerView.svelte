<script>
	import { onDestroy } from 'svelte';
	import { minutesToSeconds, formatTime } from './timer';
	import State from './state';

	let time;
	let interval = setInterval(() => {
		if (time === 0) {
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

<div class="text-6xl text-white w-full text-center">{formatTime(time)}</div>