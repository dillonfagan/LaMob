import { writable } from 'svelte/store';

let running = writable(false);

let mobbers = writable([]);

export {running, mobbers}