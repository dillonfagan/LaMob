<script>
	import { getContext, setContext } from 'svelte';
	import State from './lib/state';
	import Background from './lib/background';
	import { calculateTurns, validTime } from './lib/time';
	import { listMobbers } from './lib/mobbers';

	Background.set("green-600");

	let timeField;
	let mobbersInput = "";

	function start() {
		if (!validTime(timeField.value)) {
			timeField.value = "";
			timeField.placeholder = "❌ Enter whole number";
			return;
		}
		const config = getContext('config');
		config.mobbers.list = listMobbers(mobbersInput);
		config.turnLength = timeField.value;
		config.turns = calculateTurns(timeField.value);
		config.turnsRemaining = config.turns;

		setContext('config', config);

		State.startRotation();
	}
</script>

<h1 class="text-3xl text-white text-center uppercase italic">La Mob</h1>
<div class="flex flex-col justify-center">
	<input
		placeholder="Les Mobbeurs"
		bind:value={mobbersInput}
		class="py-2 px-4 text-xl text-white  placeholder-green-900 bg-transparent border-b-2"
	/>
	<input
		bind:this={timeField}
		value="7"
		class="py-2 px-4 text-xl text-white placeholder-green-900 placeholder-bold bg-transparent border-b-2"
		type="number"
		min="1" max="50"
	/>
	<button on:click={start} class="p-2 mt-4 text-3xl">🚀</button>
</div>