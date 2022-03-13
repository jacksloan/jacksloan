<script lang="ts">
	import XIcon from 'svelte-feather-icons/src/icons/XIcon.svelte';
	import MinusIcon from 'svelte-feather-icons/src/icons/MinusIcon.svelte';
	import MaximizeIcon from 'svelte-feather-icons/src/icons/Maximize2Icon.svelte';
	import { fly, scale } from 'svelte/transition';
        import { spring } from 'svelte/motion';
	import { draggable } from './draggable';

	export let toolbarText = '';
	export let containerClass = '';
	export let visible = true;
	export let minimized = false;
	export let fullscreen = false;

        const coords = spring({ x: 0, y: 0 }, { stiffness: 0.1, damping: 0.3 });

	function close() {
		visible = false;
		fullscreen = false;
	}

	function minimize() {
		visible = false;
		fullscreen = false;
		minimized = true;
	}

	function toggleFullscreen() {
		fullscreen = !fullscreen;
	}

	function handleDrag(event: CustomEvent<{x: number, y: number, dx: number, dy: number}>) {
		coords.update(($coords) => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function resetCoords() {
		coords.update(() => ({
			x: 0,
			y: 0
		}));
	}
</script>

{#if visible}
	<div
		style="transform:translate({$coords.x}px,{$coords.y}px) rotate({$coords.x * 0.1}deg)"
		class="relative w-full rounded-lg {containerClass}"
		out:fly={{ y: 1000, duration: 500 }}
		in:fly={{ y: 1000, duration: 500 }}
	>
		<div
			class="relative w-full h-full bg-white shadow-xl rounded-lg"
			out:scale={{ duration: 500 }}
			in:scale={{ duration: 500 }}
		>
			<div
				use:draggable
				on:dragmove={handleDrag}
				on:dragend={resetCoords}
				on:dblclick={resetCoords}
				class="relative px-2 t-0 l-0 w-full h-6 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 rounded-t-lg top-0 left-0 text-center cursor-move select-none"
			>
				<div class="hidden sm:flex absolute l-0 t-0 w-64 h-full flex-row items-center group">
					<button aria-label="Close Window" on:click={close} class="dot bg-red-500 border-red-600">
						<XIcon class="text-gray-900 opacity-0 group-hover:opacity-100" />
					</button>
					<button
						aria-label="Minimize Window"
						on:click={minimize}
						class="dot bg-yellow-500 border-yellow-600 ml-2"
					>
						<MinusIcon class="text-gray-900 opacity-0 group-hover:opacity-100" />
					</button>
					<button
						on:click={toggleFullscreen}
						aria-label="Maximize Window"
						class="dot bg-green-500 border-green-600 ml-2"
					>
						<MaximizeIcon class="text-gray-900 opacity-0 group-hover:opacity-100" />
					</button>
				</div>
				<h1 class="text-md font-medium">{toolbarText}</h1>
			</div>
			<slot />
		</div>
	</div>
{/if}

<style lang="postcss">
	.icon {
		@apply text-gray-900 opacity-0 group-hover:opacity-100;
	}
	.dot {
		@apply rounded-full w-3 h-3 border flex items-center justify-center;
	}
</style>
