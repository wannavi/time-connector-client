<script lang="ts">
	import type { DateInfo } from '$lib/types';
	import DatePickerDate from './DatePickerDate.svelte';
	import { getCalendar } from './dayUtil';
	import { pollDates } from '$lib/store/pollDates';
	import { onMount } from 'svelte';

	export let startDate: string;
	export let endDate: string;
	export let weeksPerWindow = 4;

	let daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	let currentWindow: DateInfo[][] = getCalendar(startDate, endDate, weeksPerWindow);

	// sync state with local storage
	onMount(() => {
		pollDates.reset();
	});

	function onSelected(rowIndex: number, colIndex: number) {
		if (currentWindow[rowIndex][colIndex].state == 'UNSELECTED') {
			currentWindow[rowIndex][colIndex].state = 'SELECTED';
			pollDates.push(currentWindow[rowIndex][colIndex].date);
		} else if (currentWindow[rowIndex][colIndex].state == 'SELECTED') {
			currentWindow[rowIndex][colIndex].state = 'UNSELECTED';
			pollDates.pop(currentWindow[rowIndex][colIndex].date);
		}
	}
</script>

<div class="home-date-picker-wrapper">
	<div class="date-picker-wrapper">
		<div class="date-picker-days-of-week">
			{#each daysOfWeek as day}
				<div class="date-picker-day-of-week font-light">{day}</div>
			{/each}
		</div>
		<div class="date-picker-horiz-sep" />
		<div class="date-picker-weeks">
			{#each currentWindow as week, rowIndex}
				<div class="date-picker-week">
					{#each week as dateInfo, colIndex}
						<DatePickerDate
							today={startDate}
							{dateInfo}
							on:click={() => onSelected(rowIndex, colIndex)}
						/>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.date-picker-days-of-week {
		display: flex;
		justify-content: space-between;
	}

	.date-picker-day-of-week {
		display: flex;
		justify-content: center;
		padding: 0 25px;
	}

	.date-picker-horiz-sep {
		border-top: 1.5px solid rgba(0, 0, 0, 0.05);
		margin-top: 25px;
		margin-bottom: 25px;
		width: 100%;
	}

	.date-picker-week {
		display: flex;
		justify-content: space-between;
	}

	.date-picker-week:not(:first-child) {
		margin-top: 20px;
	}

	@media screen and (max-width: 768px) {
		.date-picker-day-of-week {
			padding: 0 5px;
		}
	}
</style>
