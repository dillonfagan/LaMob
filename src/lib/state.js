import { writable } from 'svelte/store';
import SetupView from '../SetupView.svelte';
import TimerView from '../TimerView.svelte';
import SkipView from  '../SkipView.svelte';
import SwitchView from '../SwitchView.svelte';
import EndRotationView from '../EndRotationView.svelte';
import BreakView from '../BreakView.svelte';

const view = writable(SetupView);

view.subscribe(newView => {
	console.log(`State switched to ${newView.name}`);
});

const subscribe = view.subscribe;

function startRotation() {
	view.set(TimerView);
}

function finishRotation() {
	view.set(EndRotationView);
}

function startBreak() {
	view.set(BreakView);
}

function finishTurn() {
	view.set(SwitchView);
}

function nextTurn() {
	view.set(TimerView);
}

function skipTurn() {
	view.set(SkipView);
}

export default {
	subscribe,
	startRotation,
	finishRotation,
	startBreak,
	finishTurn,
	nextTurn,
	skipTurn
}