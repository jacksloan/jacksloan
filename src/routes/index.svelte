<script>
	import PageTransition from '$lib/PageTransition.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Jack Sloan | About</title>
	<meta
		name="description"
		content="About Jack Sloan / J Sloan Consulting LLC, a software consultant based in Minnesota."
	/>
</svelte:head>

<PageTransition refresh={$page.url.pathname}>
	<section class="prose">
		<h2 class="text-xl">About</h2>
		<p>
			Hi! <span class="ml-1 mr-3">&#128075;</span> I'm Jack, a software consultant living on the north shore of Lake Superior.
		</p>
		<figure class="h-80">
			<img
				src="/onion-river-ski.jpg"
				style="width: 384px; height: 274"
				alt="Skiing At Onion River Rd, Lusten MN"
			/>
			<figcaption class="-mt-4">Onion River Road - 2021</figcaption>
		</figure>
	</section>
</PageTransition>
