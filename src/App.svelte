<script>
	import { onDestroy } from 'svelte';
	import { currentMobber } from './store';
	import ViewController from './ViewController.svelte';
	import Background from './background';

	let bgColor;

	const unsubscribe = Background.subscribe(bg => {
		bgColor = bg;
	});

	onDestroy(unsubscribe);
</script>

<main id="main" class="w-full h-full p-16 bg-{bgColor} flex items-center justify-center">
	<div class="mw-lg">
		<h1 class="text-3xl text-white text-center uppercase italic">{$currentMobber}</h1>
		<ViewController />
	</div>
</main>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>