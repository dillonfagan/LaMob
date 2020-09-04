import { writable } from 'svelte/store';
import SetupView from './SetupView.svelte';

const view = writable(SetupView);

view.subscribe(newView => {
	console.log(`State switched to ${newView.name}`);
});

const subscribe = view.subscribe;

export default {
	subscribe
}