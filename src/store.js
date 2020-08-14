import { writable } from 'svelte/store';

let running = writable(false);

export {running}