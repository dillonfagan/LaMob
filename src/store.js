import { writable } from 'svelte/store';

export let running = writable(false);
export let waiting = writable(false);
export let mobbers = writable([]);
export let currentMobber = writable('La Mob');