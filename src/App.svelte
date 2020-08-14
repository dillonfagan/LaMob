<script>
	import Timer from './Timer.svelte';
	import { running } from './store';
</script>

<main id="main" class="w-full h-full p-16 {$running ? "bg-purple-700" : "bg-green-600"} flex items-center justify-center">
	<div class="mw-lg">
		<h1 class="text-3xl text-white text-center uppercase italic">La Mob</h1>
		<Timer />
	</div>
</main>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>