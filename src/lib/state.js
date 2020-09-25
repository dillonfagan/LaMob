import { writable } from 'svelte/store';
import SetupView from '../SetupView.svelte';
import TimerView from '../TimerView.svelte';
import SwitchView from '../SwitchView.svelte';

const view = writable(SetupView);

view.subscribe(newView => {
	console.log(`State switched to ${newView.name}`);
});

const subscribe = view.subscribe;

function startRotation() {
	view.set(TimerView);
}

function finishRotation() {
	view.set(SetupView);
}

function finishTurn() {
	view.set(SwitchView);
}

function nextTurn() {
	view.set(TimerView);
}

export default {
	subscribe,
	startRotation,
	finishRotation,
	finishTurn,
	nextTurn
}