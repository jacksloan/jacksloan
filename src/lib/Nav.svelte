<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import LinkIcon from 'svelte-feather-icons/src/icons/ExternalLinkIcon.svelte';
	import MenuIcon from 'svelte-feather-icons/src/icons/MenuIcon.svelte';
	export let current: string = '';
	export let pages: [string, string, string?][] = [
		['/', 'About'],
		['/project', 'Projects'],
		[
			'/resume',
			'Resume',
			'https://docs.google.com/document/d/1ukmcXTZxT4qIZSJprqPtwnEbyp5a5XD146htVwJ9W6U/edit?usp=sharing'
		]
	];

	const dispatch = createEventDispatcher();

	let mobileMenuExpanded = false;
	let isWindowSmall = false;

	function mobileLinkClicked(path, name) {
		linkClicked(path, name);
		toggleMobileMenu();
	}

	function linkClicked(path, name) {
		dispatch('linkClicked', { path, name });
	}

	function toggleMobileMenu() {
		mobileMenuExpanded = !mobileMenuExpanded;
	}

	onMount(() => {
		const matchWindowSmall = window.matchMedia('(max-width: 540px)');
		isWindowSmall = matchWindowSmall.matches;

		matchWindowSmall.addEventListener('change', (e) => {
			isWindowSmall = e.matches;
		});
	});
</script>

{#if isWindowSmall}
	<nav
		class="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 border border-gray-300 shadow-lg p-4 w-full rounded-xl flex flex-col items-left z-40"
	>
		<button class="flex flex-row" aria-label="Toggle Mobile Menu" on:click={toggleMobileMenu}>
			<MenuIcon size="24" />
			<span class="ml-4">Menu</span>
		</button>
		{#if mobileMenuExpanded}
			<ul transition:slide class="flex flex-col mt-4">
				{#each pages as [path, name, externalLink]}
					<li class:linkActive={path === current}>
						{#if externalLink}
							<a
								rel="noopener"
								href={externalLink}
								target="_blank"
								class="flex flex-row items-center py-4 w-full"
							>
								{name}
								<LinkIcon class="ml-2 text-gray-800" size="16" />
							</a>
						{:else}
							<a
								class="inline-block w-full py-4"
								on:click={() => mobileLinkClicked(path, name)}
								href={path}>{name}</a
							>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</nav>
{:else}
	<nav
		class="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 border border-gray-300 shadow-lg p-6 px-8 rounded-full"
	>
		<ul class="flex flex-row">
			{#each pages as [path, name, externalLink], index}
				<li class:linkActive={current === path} class:ml-8={index > 0}>
					{#if externalLink}
						<a
							href={externalLink}
							target="_blank"
							class="flex flex-row items-center"
							rel="noopener"
						>
							{name}
							<LinkIcon class="ml-2 text-gray-800" size="16" />
						</a>
					{:else}
						<a on:click={() => linkClicked(path, name)} href={path}>{name}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style lang="postcss">
	.linkActive {
		@apply text-indigo-600 underline;
	}

	li {
		position: relative;
	}

	li:not(:last-child)::after {
		content: '';
		width: 1px;
		@apply bg-gray-300  h-8 absolute -top-1 -right-4;
	}
</style>
