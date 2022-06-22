import type { ISODate } from '$lib/types';
import storage from '$lib/store';

const initializePollDates = () => {
	const { subscribe, set, update } = storage<ISODate[]>('dates', []);
	return {
		subscribe,
		push: (date: ISODate) => update((dates) => [...dates, date]),
		pop: (date: ISODate) => update((dates) => dates.filter((d) => d != date)),
		reset: () => set([])
	};
};

export const pollDates = initializePollDates();
