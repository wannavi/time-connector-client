import type { IDateInfo } from '$lib/types';
import { DateTime } from 'luxon';

export const now = (): DateTime => {
	return DateTime.now();
};

export const getCalendar = (
	startDate: string,
	endDate: string,
	weeksPerWindow: number
): IDateInfo[][] => {
	const dateTime = DateTime.fromISO(startDate);
	const startOfCalendar = dateTime.minus({ days: dateTime.weekday });

	let cursor = 0;
	const calendar = new Array(weeksPerWindow).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			const currentDate = startOfCalendar.plus({ days: cursor++ });
			return {
				date: currentDate.toISODate(),
				state: currentDate.toISODate() <= endDate ? 'BLANK' : 'UNSELECTED'
			} as IDateInfo;
		});
	});

	return calendar;
};
