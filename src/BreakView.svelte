<script>
	import { formatTime } from './lib/time';
	import Background from './lib/background';
	import State from './lib/state';

	Background.set("green-600");

	let time = 600;
	let interval = setInterval(() => {
		if (time === 0) {
			clearInterval(interval);
			State.finishTurn();
			return;
		}
		time -= 1;
	}, 10);
</script>

<svelte:head>
	<title>BREAK | {formatTime(time)}</title>
</svelte:head>

<div class="text-3xl text-white text-center uppercase font-bold italic">Break Time</div>
<div class="text-6xl text-white w-full text-center">{formatTime(time)}</div>
