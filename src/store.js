import { writable } from 'svelte/store';

export let running = writable(false);
export let waiting = writable(false);