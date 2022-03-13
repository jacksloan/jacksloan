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

<GithubStars link="google.com" projectName="google" stargazers={10} />

<PageTransition refresh={$page.url.pathname}>
	<section>
		<h2 class="text-xl font-bold">Projects</h2>
		<ul>
			{#each activeRepos as r}
				<li
					class="border border-blue-200 shadow-md flex flex-col items-start rounded-md px-3 pt-3 pb-2 mt-3"
				>
					<h3 class="text-lg font-semibold py-3">
						<a
							rel="noopener"
							class="text-blue-400 underline flex flex-row items-center"
							href={r.html_url}
							target="_blank"
						>
							<span class="mr-2">
								{r.name}
							</span>
						</a>
						<GithubStars
							link={r.stargazers_url}
							projectName={r.name}
							stargazers={r.stargazers_count}
						/>
					</h3>
					<p class="py-1">
						{r.description || r.name}
					</p>
					<ul class="py-3 flex flex-row" aria-label="github project topics">
						{#each r.topics as topic}
							<li class="rounded-lg ml-1 bg-gray-100 border border-gray-200 px-1">{topic}</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</section>
</PageTransition>
