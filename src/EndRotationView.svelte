<script>
	import Background from './lib/background';
	import State from './lib/state';

	Background.set("red-800");

	function startBreak() {
		State.startBreak();
	}
</script>

<svelte:body/>

<div class="flex flex-col justify-center">
	<div class="text-4xl text-white text-center uppercase italic mb-4">Break Time!</div>
	<button class="text-xl bg-white rounded-full py-1" on:click={startBreak}>Start Break</button>
</div>