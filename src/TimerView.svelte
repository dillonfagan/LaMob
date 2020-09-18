<script>
	import { getContext } from 'svelte';
	import { minutesToSeconds, formatTime } from './timer';
	import State from './state';
	import Background from './background';

	Background.set("purple-700");
	const config = getContext('config');
	const mobberIndex = config.mobbers.index;
	const mobber = config.mobbers.list[mobberIndex];

	let time = minutesToSeconds(config.turnLength);
	let interval = setInterval(() => {
		if (time === 0) {
			clearInterval(interval);
			State.finishTurn();
			return;
		}
		time -= 1;
	}, 1000);
</script>

<div class="text-3xl text-white text-center uppercase italic">{mobber}</div>
<div class="text-6xl text-white w-full text-center">{formatTime(time)}</div>