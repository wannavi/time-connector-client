<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
</script>

<section class="h-screen">
	<div class="flex h-full w-full items-center justify-center container mx-auto px-8">
		<div class="max-w-2xl text-center ">
			<h1 class="text-3xl sm:text-4xl capitalize tracking-widest lg:text-7xl font-thin">
				빠르게 만나자, BAROMEET
			</h1>

			<p class="mt-6 lg:text-lg text-gray-400">달력과 시간표를 이용해 스케줄을 공유하세요.</p>

			<div class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
				<a
					href="/calendar"
					class="create-button w-full rounded-md bg-blue-700 px-8 py-4 font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
				>
					Let's create
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.create-button {
		background: #424874;
	}

	.create-button:hover {
		background: #a6b1e1;
	}
</style>
