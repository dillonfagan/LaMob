import { writable } from 'svelte/store';

const bg = writable("green-600");
const set = bg.set;
const subscribe = bg.subscribe;

export default { set, subscribe }