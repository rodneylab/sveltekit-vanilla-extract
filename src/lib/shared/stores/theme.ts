import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const theme = writable<string>(browser ? localStorage.theme || 'summer' : 'summer');

theme.subscribe((value) => {
	if (browser) {
		localStorage.theme = value;
	}
});
