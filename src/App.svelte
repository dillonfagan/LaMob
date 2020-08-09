<script>
	import Timer from './Timer.svelte';
	import { running } from './store';
</script>

<main id="main" class="w-full h-full p-16 bg-green-600 flex items-center justify-center" class:running={$running}>
	<div class="mw-lg">
		<Timer />
	</div>
</main>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.running {
		@apply bg-purple-700;
	}
</style>