<script>
	import { page } from '$app/stores';
	import PageTransition from '$lib/PageTransition.svelte';
</script>

<svelte:head>
	<title>Jack Sloan | Articles</title>
	<meta name="description" content="Software articles/tutorials by Jack" />
</svelte:head>
<PageTransition refresh={$page.path}>
	<section class="prose">
		<h2 class="text-xl">Articles</h2>
		<p>
			<span class="mr-2">&#128679;</span>Under construction... &#128679;
		</p>
	</section>
</PageTransition>
