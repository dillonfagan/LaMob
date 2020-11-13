<script>
	import { getContext, setContext } from 'svelte';
	import State from './lib/state';
	import Background from './lib/background';
	import ShuffleIcon from './components/icons/Shuffle.svelte';
	import { calculateTurns, validTime } from './lib/time';
	import { listMobbers, sortMobbers } from './lib/mobbers';

	Background.set("green-600");

	let timeField;
	let mobbersInput = "";
	let validTimeEntered = true;

	function start() {
		if (!validTime(timeField.value)) {
			validTimeEntered = false;
			timeField.value = "";
			timeField.placeholder = "Enter whole number";
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

	function shuffle() {
		var mobbers = listMobbers(mobbersInput);
		var shuffledMobbers = sortMobbers(mobbers);

		mobbersInput = shuffledMobbers.join(', ');
	}
</script>

<h1 class="text-3xl text-white text-center uppercase italic">La Mob</h1>
<div class="flex flex-col justify-center">
	<div class="flex flex-row border-b-2">
		<input
			placeholder="Les Mobbeurs"
			bind:value={mobbersInput}
			class="py-2 px-4 text-xl text-white placeholder-green-900 bg-transparent"
		/>
		<ShuffleIcon on:click={shuffle} />
	</div>
	<input
		bind:this={timeField}
		value="7"
		class="py-2 px-4 text-xl text-white placeholder-green-900 placeholder-bold bg-transparent border-b-2"
		class:invalid={!validTimeEntered}
		type="number"
		min="1" max="50"
	/>
	<button on:click={start} class="p-2 mt-4 text-3xl">🚀</button>
</div>

<style>
	.invalid {
		@apply border-red-500;
	}
</style>