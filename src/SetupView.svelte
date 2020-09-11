<script>
	import State from './state';
	import { listMobbers } from './mobbers';

	let mobbersInput = "";
	let timeInput = 7;

	function start() {
		const mobbers = listMobbers(mobbersInput);
		State.startRotation(mobbers, timeInput);
	}
</script>

<input
	placeholder="La Mobbers"
	bind:value={mobbersInput}
/>
<input
	bind:value={timeInput}
	class="py-2 px-4 text-xl text-white bg-transparent border-b-2"
	type="number"
	min="1" max="50"
/>
<button on:click={start} class="bg-white py-2 px-6 mt-4 rounded-full">Start</button>