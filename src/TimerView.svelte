<script>
	import { getContext } from 'svelte';
	import { minutesToSeconds, formatTime } from './lib/time';
	import State from './lib/state';
	import Background from './lib/background';

	Background.set("purple-700");
	const config = getContext('config');
	config.turnsRemaining -= 1;

	const mobberIndex = config.mobbers.index;
	const mobber = config.mobbers.list[mobberIndex];
	const eggs = '🥚'.repeat(config.turnsRemaining);

	let nextMobberIndex = mobberIndex + 1;
	if (nextMobberIndex > config.mobbers.list.length - 1)
		nextMobberIndex = 0;

	const nextMobber = config.mobbers.list[nextMobberIndex];

	let time = minutesToSeconds(config.turnLength);
	let interval = setInterval(() => {
		if (time === 0) {
			clearInterval(interval);
			if (config.turnsRemaining > 0)
				State.finishTurn();
			else
				State.finishRotation();
			return;
		}
		time -= 1;
	}, 10);
</script>

<svelte:head>
	<title>{mobber.toUpperCase()} | {formatTime(time)}</title>
</svelte:head>

<div class="text-3xl text-white text-center uppercase italic">{mobber}</div>
<div class="text-6xl text-white w-full text-center">{formatTime(time)}</div>
<div class="text-2xl text-purple-900 text-center uppercase">{nextMobber}</div>
<div class="text-xl text-center">{eggs}</div>
