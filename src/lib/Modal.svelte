<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';

	export let containerClass = '';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
	let modal;
	const handleKeydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}
		// when modal is open, only tab between elements belonging to this modal
		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter((n: any) => n.tabIndex >= 0);
			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;
			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;
			(tabbable[index] as HTMLElement)?.focus();
			e.preventDefault();
		}
	};

	// focus previous focus on modal close
	const hasPreviousFocus = typeof document !== 'undefined' && document.activeElement;
	if (hasPreviousFocus) {
		onDestroy(() => {
			(hasPreviousFocus as HTMLElement)?.focus();
		});
	}
</script>

<!-- see https://github.com/sveltejs/svelte/blob/master/site/content/examples/15-composition/04-modal/Modal.svelte -->
<svelte:window on:keydown={handleKeydown} />

<div
	class="fixed left-0 top-0 w-screen h-screen z-50 overflow-auto {containerClass}"
	role="dialog"
	aria-modal="true"
	bind:this={modal}
>
	<slot />
</div>
