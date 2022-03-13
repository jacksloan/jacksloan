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
	import type { Repository } from '$lib/githubRepo';
	import GithubStars from '$lib/GithubStars.svelte';
	import PageTransition from '$lib/PageTransition.svelte';
	export let repos: Repository[];
	$: activeRepos = repos.filter((r) => {
		return r.archived === false && r.private === false && r.fork === false;
	});
</script>

<svelte:head>
	<title>Jack Sloan | Projects</title>
	<meta name="description" content="A list of Jack's open source projects" />
</svelte:head>

<PageTransition refresh={$page.url.pathname}>
	<section>
		<h2 class="text-xl font-bold">Projects</h2>
		<ul>
			{#each activeRepos as r}
				<li
					class="flex flex-col items-start rounded-md px-3 py-4 mt-1 border-b border-gray-200"
				>
					<h3 class="text-xl font-semibold flex flex-row justify-between items-center gap-2">
						<a
							rel="noopener"
							class="text-blue-400 underline flex flex-row h-8"
							href={r.html_url}
							target="_blank"
						>
							<span class="mr-2">
								{r.name}
							</span>
						</a>
						<GithubStars link={r.html_url} projectName={r.name} stargazers={r.stargazers_count} />
					</h3>
					<span class="py-1">
						<p class="pt-1 pb-2">
							{r.description || r.name}
						</p>
						<ul class="flex flex-row -ml-1 mt-1" aria-label="github project topics">
							{#each r.topics as topic}
								<li class="rounded-lg ml-1 bg-gray-100 border text-sm border-gray-200 px-1">{topic}</li>
							{/each}
						</ul>
					</span>
				</li>
			{/each}
		</ul>
	</section>
</PageTransition>
