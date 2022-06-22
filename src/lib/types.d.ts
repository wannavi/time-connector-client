export type ISODate = string;

export interface DateInfo {
	date: ISODate;
	state: 'BLANK' | 'SELECTED' | 'UNSELECTED';
}

export interface CreateEventRequest {
	input: {
		title: string;
		description: string;
		pollDates: ISODate[];
		pollEndTime: ISODate;
		timeZone: ISODate;
	};
}
