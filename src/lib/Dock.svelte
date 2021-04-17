<script lang="ts">
	import List from 'svelte-feather-icons/src/icons/ListIcon.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function dockItemClick() {
		dispatch('dockItemClick');
	}
</script>

<div class="flex flex-col items-center">
	<button
		aria-label="Dock Item"
		on:click={dockItemClick}
		class="bg-gray-200 border-gray-300 border bg-opacity-50 shadow-xl rounded-3xl p-6"
	>
		<List class="text-white" size="48" />
	</button>
	<span class="rounded-full bg-white w-1 h-1 mt-2 shadow-xl" />
</div>
