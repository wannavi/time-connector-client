<script lang="ts">
	import DatePicker from '$lib/calendar/DatePicker.svelte';
	import HomeHeading from '$lib/header/HomeHeading.svelte';
	import { now } from '$lib/calendar/dayUtil';
	import BottomBar from '$lib/calendar/BottomBar.svelte';
	import Button from '$lib/common/Button.svelte';

	let today = now();
	let yesterday = today.minus({ days: 1 });
</script>

<div id="content-wrapper" class="mt-48">
	<div id="home-heading-row" class="flex justify-between items-center mb-24">
		<HomeHeading title={`일정을 달력에서 선택해주세요.`} />
		<Button>Let's meet</Button>
	</div>

	<DatePicker endDate={yesterday.toISODate()} startDate={today.toISODate()} weeksPerWindow={4} />

	<BottomBar />
</div>

<style>
</style>
