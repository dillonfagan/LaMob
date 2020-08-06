<script>
	import Timer from './Timer.svelte';
</script>

<main id="main" class="w-full h-full p-16 bg-green-600 flex items-center justify-center">
	<div class="mw-lg">
		<h1 class="text-6xl text-white italic">La Mob</h1>
		<Timer />
	</div>
</main>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>