<script lang="ts">
	export let onClickedCallback: () => void;
</script>

<div class="flex sm:hidden bg-[#424874] fixed inset-x-0 z-10 bottom-0 h-20 shadow">
	<div class="flex flex-1 justify-between items-center px-12">
		<div class="text-white">
			<a href="/">BAROMEET</a>
		</div>

		<div
			role="button"
			class="block sm:hidden bg-white hover:bg-[#424874] text-[#424874] hover:text-white py-2 px-8 rounded-lg text-md md:text-xl font-thin border border-slate-200"
			on:click={onClickedCallback}
		>
			다음
		</div>
	</div>
</div>

<style>
</style>
