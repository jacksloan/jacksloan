<script context="module" lang="ts">
	export async function load({ fetch }) {
		const response = await fetch('https://api.github.com/users/jacksloan/repos');
		const repos = await response.json();
		return {
			props: {
				repos
			}
		};
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import PageTransition from '$lib/PageTransition.svelte';
	export let repos: any[];
	$: activeRepos = repos.filter((r) => {
		return r.archived === false && r.private === false && r.fork === false;
	});
</script>

<svelte:head>
	<title>Jack Sloan | Projects</title>
</svelte:head>

<PageTransition refresh={$page.path}>
	<section class="prose">
		<h2 class="text-xl">Projects</h2>
		<span class="mr-2">&#128679;</span>Under construction... &#128679;

		<ul>
			{#each activeRepos as r}
				<li>
					<a href={r.html_url} target="_blank">
						{r.description || r.name}
					</a>
				</li>
			{/each}
		</ul>
	</section>
</PageTransition>
