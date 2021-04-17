<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LinkIcon from 'svelte-feather-icons/src/icons/ExternalLinkIcon.svelte';
	export let current: string = '';
	export let pages: [string, string, string?][] = [
		['/', 'About'],
		['/article', 'Articles'],
		['/project', 'Projects'],
		[
			'/resume',
			'Resume',
			'https://docs.google.com/document/d/1ukmcXTZxT4qIZSJprqPtwnEbyp5a5XD146htVwJ9W6U/edit?usp=sharing'
		],
		['/contact', 'Contact']
	];

	const dispatch = createEventDispatcher();
	function linkClicked(path, name) {
		dispatch('linkClicked', { path, name });
	}
</script>

<nav
	class="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 border border-gray-200 shadow-lg p-6 px-8 rounded-full"
>
	<ul class="flex flex-row gap-8">
		{#each pages as [path, name, externalLink]}
			<li class:linkActive={current === path}>
				{#if externalLink}
					<a href={externalLink} target="_blank" class="flex flex-row items-center">
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
