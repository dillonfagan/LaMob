import { writable } from 'svelte/store';
import SetupView from './SetupView.svelte';
import TimerView from './TimerView.svelte';

const view = writable(SetupView);

const turnLength = writable(0);

view.subscribe(newView => {
	console.log(`State switched to ${newView.name}`);
});

const subscribe = view.subscribe;

function startRotation(mobbers, minutes) {
	// TODO: save the mobbers
	turnLength.set(minutes);
	view.set(TimerView);
}

export default {
	subscribe,
	startRotation,
	turnLength
}