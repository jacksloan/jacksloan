<script lang="ts">
	export let current: string = '';
	export let pages: [string, string][] = [
		['/', 'About'],
		['/article', 'Articles'],
		['/project', 'Projects'],
		['/contact', 'Contact']
	];
</script>

<nav class="bg-gray-100 border border-gray-200 shadow-lg p-6 px-8 rounded-full">
	<ul class="flex flex-row gap-8">
		{#each pages as [path, name]}
			<li class:active={current === path}>
				<a href={path}>{name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	.active {
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
