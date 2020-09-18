import { writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';
import SetupView from './SetupView.svelte';
import TimerView from './TimerView.svelte';

const view = writable(SetupView);

view.subscribe(newView => {
	console.log(`State switched to ${newView.name}`);
});

const subscribe = view.subscribe;

function startRotation(mobbersList, minutes) {
	view.set(TimerView);
}

function getCurrentMobber() {
	const config = getContext('config');
	const index = config.mobbers.index;

	return config.mobbers.list[index];
}

export default {
	subscribe,
	startRotation,
	getCurrentMobber
}