<script lang="ts">
	import { dates } from '$lib/store/dates';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log($dates);
	});
</script>
