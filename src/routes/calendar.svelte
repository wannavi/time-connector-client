<script lang="ts">
	import DatePicker from '$lib/calendar/DatePicker.svelte';
	import HomeHeading from '$lib/header/HomeHeading.svelte';
	import { now } from '$lib/calendar/dayUtil';
	import BottomBar from '$lib/calendar/BottomBar.svelte';
	import { pollDates } from '$lib/store/pollDates';
	import ContentWrapper from '$lib/base/ContentWrapper.svelte';

	let today = now();
	let yesterday = today.minus({ days: 1 });
</script>

<ContentWrapper>
	<div id="home-heading-row" class="flex justify-between items-center mb-24">
		<HomeHeading title={`일정을 달력에서 선택해주세요.`} />

		<div
			role="button"
			class="hidden sm:block bg-[#424874] hover:bg-[#a6b1e1] text-white py-2 px-8 rounded-lg text-md md:text-xl font-thin"
		>
			<a href={$pollDates.length ? '/create' : ''}>다음</a>
		</div>
	</div>
	<DatePicker endDate={yesterday.toISODate()} startDate={today.toISODate()} weeksPerWindow={4} />
	<BottomBar
		onClickedCallback={() => {
			if ($pollDates.length) location.href = '/create';
		}}
	/>
</ContentWrapper>

<style>
</style>
