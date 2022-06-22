import { writable } from 'svelte/store';
import type { IDateInfo } from '$lib/types';

export const calendarState = writable<IDateInfo[][]>([]);
