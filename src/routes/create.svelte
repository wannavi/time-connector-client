<script lang="ts">
	import ContentWrapper from '$lib/base/ContentWrapper.svelte';
	import BottomBar from '$lib/calendar/BottomBar.svelte';
	import HomeHeading from '$lib/header/HomeHeading.svelte';
	import { pollDates } from '$lib/store/pollDates';

	let title = '';
	let description = '';

	function handleSubmit() {
		const payload = {
			title,
			description,
			pollDates: $pollDates
		};

		// Request to CreateEvent
		console.log(payload);

		// location
		location.href = `/meet/${1231}`;
	}
</script>

<ContentWrapper>
	<div id="home-heading-row" class="flex justify-between items-center mb-24">
		<HomeHeading title={`미팅 생성`} />

		<div
			role="button"
			class="hidden sm:block bg-[#424874] hover:bg-[#a6b1e1] text-white py-2 px-8 rounded-lg text-md md:text-xl font-thin"
			on:click={handleSubmit}
		>
			다음
		</div>
	</div>
	<form>
		<div class="relative z-0 w-full mb-20 group">
			<label for="title" class="text-2xl font-medium text-gray-900">미팅 이름</label>
			<input
				name="title"
				class="block w-full py-2 text-xl text-gray-700 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-gray-500 focus:ring-0 peer"
				placeholder="목적이 잘 드러나게 적어주세요."
				bind:value={title}
				required
			/>
		</div>
		<div class="relative z-0 w-full mb-20 group">
			<label for="description" class="text-2xl font-medium text-gray-900">미팅 세부사항</label>
			<textarea
				name="description"
				rows="3"
				class="block w-full py-2 text-xl text-gray-700 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-gray-500 focus:ring-0 peer"
				placeholder="미팅에 대해 기억해야하거나 알리고 싶은 사항을 적어주세요."
				bind:value={description}
			/>
		</div>
	</form>

	<BottomBar onClickedCallback={handleSubmit} />
</ContentWrapper>
