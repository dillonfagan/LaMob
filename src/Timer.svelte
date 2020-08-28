<script>
	import { running, waiting, mobbers, currentMobber } from './store.js';
	import { minutesToSeconds, formatTime } from './timer.js';
	import { listMobbers } from './mobbers.js';
	import Music from './music.js';

	let mobberIndex = 0;
	let time = minutesToSeconds(0);
	let interval;

	let rawMobbersInput = "";
	let timeInput = 7;

	function start() {
		mobbers.set(listMobbers(rawMobbersInput));
		running.set(true);
		waiting.set(false);

		currentMobber.set($mobbers[mobberIndex])
		time = minutesToSeconds(timeInput);

		interval = setInterval(() => {
			if (time === 0) {
				mobberIndex += 1;
				Music.play();
				clearInterval(interval);

				if (mobberIndex === $mobbers.length)
				{
					running.set(false);
					currentMobber.set("La Mob");
				}
				else
					waiting.set(true);
				return;
    		}
    		time -= 1;
		},1000);
	}
</script>

<svelte:body
	on:mouseenter={Music.stop}
/>

<section>
	<div class="text-6xl text-white w-full text-center" class:hidden={!$running}>{formatTime(time)}</div>
	<div class:hidden={$running}>
		<input
			placeholder="La Mobbers"
			bind:value={rawMobbersInput}
		/>
		<input
			bind:value={timeInput}
			class="py-2 px-4 text-xl text-white bg-transparent border-b-2"
			type="number"
			min="1" max="50"
		/>
		<button on:click={start} class="bg-white py-2 px-6 mt-4 rounded-full">Start</button>
	</div>
	<div class="w-full h-16 flex justify-center mt-4 items-center">
		<button class:hidden={!$waiting} class="bg-white py-2 px-6 rounded-full" on:click={start}>Next</button>
	</div>
</section>

<style>
	.hidden {
		@apply hidden;
	}
</style>