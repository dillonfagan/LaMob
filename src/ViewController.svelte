<script>
	import { setContext, onDestroy } from 'svelte';
	import Background from './lib/background';
	import State from './lib/state';

	const config = {
		mobbers: {
			list: [],
			index: 0
		},
		turnLength: 0
	};

	setContext('config', config);

	let active;
	let bgColor;

	const unsubscribeBackground = Background.subscribe(bg => {
		bgColor = bg;
	});

	const unsubscribeState = State.subscribe(view => {
		console.log(`ViewController detected ${view.name}`);
		active = view;
	})

	onDestroy(unsubscribeBackground);
	onDestroy(unsubscribeState);
</script>

<main id="main" class="w-full h-full p-16 bg-{bgColor} flex items-center justify-center">
	<div class="mw-lg">
		<svelte:component this={active} />
	</div>
</main>