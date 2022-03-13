<script lang="ts">
	import '../app.postcss';
	import Nav from '$lib/Nav.svelte';
	import Window from '$lib/Window.svelte';
	import Dock from '$lib/Dock.svelte';
	import { fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import Modal from '$lib/Modal.svelte';

	let minimized: boolean;
	let visible: boolean;
	let fullscreen: boolean;

	function showWindow() {
		minimized = false;
		visible = true;
	}
</script>

{#if fullscreen}
	<Modal on:close={() => (fullscreen = false)}>
		<div class="h-screen w-screen ">
			<Window
				bind:visible
				bind:minimized
				bind:fullscreen
				containerClass="w-full h-full"
				toolbarText="Jack Sloan"
			>
				<main class="p-4 md:p-6">
					<slot />
				</main>
			</Window>
		</div>
	</Modal>
{/if}

<div class="container mx-auto h-screen flex flex-col items-center p-4 md:p-8 relative">
	<Nav current={$page.url.pathname} on:linkClicked={showWindow} />
	{#if !fullscreen}
		<div class="mt-4 md:mt-8 w-full max-w-3xl">
			<Window bind:visible bind:minimized bind:fullscreen toolbarText="Jack Sloan">
				<main class="p-4 md:p-6">
					<slot />
				</main>
			</Window>
		</div>
	{/if}

	{#if minimized}
		<div transition:fly={{ duration: 750, y: 50, easing: elasticOut }} class="absolute bottom-3">
			<Dock on:dockItemClick={showWindow} />
		</div>
	{/if}
	{#if !minimized && !visible}
		<section
			aria-label="Tayne Dancing"
			class="px-4 pt-12 text-right absolute top-48 flex flex-col content-center items-center z-0"
			in:fly={{ duration: 1000, y: 50, easing: elasticOut }}
		>
			<p class="mb-4">Not really sure what you were expecting...</p>
			<iframe
				src="https://giphy.com/embed/VeHN6Z1DD1E3TWAy8P"
				title="flarhgunnstow"
				width="480"
				height="270"
				frameBorder="0"
				class="giphy-embed"
				allowFullScreen
			/>
			<p>
				<a
					href="https://giphy.com/gifs/moodman-paul-rudd-tim-and-eric-celery-man-VeHN6Z1DD1E3TWAy8P"
					>via GIPHY</a
				>
			</p>
		</section>
	{/if}
</div>
