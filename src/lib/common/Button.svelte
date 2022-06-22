<script lang="ts">
</script>

<div
	role="button"
	class="create-button hidden sm:block text-white py-2 px-8 rounded-lg text-sm md:text-xl font-thin"
>
	<slot />
</div>

<style>
	.create-button {
		background: #424874;
	}

	.create-button:hover {
		background: #a6b1e1;
	}
</style>
