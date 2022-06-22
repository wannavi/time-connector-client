<script lang="ts">
	import { DateTime } from 'luxon';
	import type { IDateInfo } from '$lib/types';

	export let dateInfo: IDateInfo;
	let { day, month } = DateTime.fromISO(dateInfo.date);
</script>

<div class="date-picker-date-wrapper">
	<div
		class="date-picker-date hover:bg-gray-100"
		class:selected={dateInfo.state === 'SELECTED'}
		data-month={day === 1 ? `${month}월` : ''}
		on:click
	>
		{day}
	</div>
</div>

<style>
	.date-picker-date-wrapper {
		display: flex;
		justify-content: center;
		cursor: pointer;
		margin: 5px;
		padding: 5px;

		flex-direction: column;
	}

	.date-picker-date {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100px !important;
		height: 45px;
		width: 45px;

		position: relative;
		top: auto;
		right: auto;
		bottom: auto;
		left: auto;
	}

	.date-picker-date::before {
		color: #424874;
		content: attr(data-month);
		font-size: 12px;
		position: absolute;
		top: -20px;
		right: auto;
		bottom: auto;
	}

	.date-picker-date.selected {
		background: #424874 !important;
		color: #fff !important;
	}

	@media screen and (max-width: 768px) {
		.date-picker-date {
			height: 30px;
			width: 30px;
		}
	}

	@media screen and (max-width: 479px) {
		.date-picker-date-wrapper {
			margin: 0px;
			padding: 0px;
		}
	}
</style>
