<script lang="ts">
	import DatePicker from '$lib/calendar/DatePicker.svelte';
	import HomeHeading from '$lib/header/HomeHeading.svelte';
	import { now } from '$lib/calendar/dayUtil';

	let today = now();
</script>

<div id="content-wrapper" class="mt-48">
	<div id="home-heading-row" class="flex justify-between items-center mb-24">
		<HomeHeading title={`일정을 달력에서 선택해주세요. (오늘: ${today.toISODate()})`} />
		<div role="button" class="create-button  text-white text-lg py-2 px-8 rounded-lg">
			Let's meet
		</div>
	</div>

	<DatePicker endDate={today} startDate={today} weeksPerWindow={4} />
</div>

<style>
	.create-button {
		background: #424874;
	}

	.create-button:hover {
		background: #a6b1e1;
	}
</style>
