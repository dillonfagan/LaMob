import { writable } from 'svelte/store';

let running = writable(false);
let waiting = writable(false);

export {running, waiting}