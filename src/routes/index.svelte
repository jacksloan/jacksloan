<script>
	import PageTransition from '$lib/PageTransition.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Jack Sloan | About</title>
</svelte:head>

<PageTransition refresh={$page.path}>
	<section class="prose">
		<h2 class="text-xl">About</h2>
		<p>
			Hi! <span class="ml-1 mr-3">&#128075;</span> I'm Jack, a software consultant based in Minnesota.
			I love to code simple, creative solutions to real-world problems.
		</p>
		<p>
			In my free time I like to Cross-Country Ski, play music, and work on coding projects exploring
			new technologies.
		</p>
		<figure class="h-80">
			<img
				src="/onion-river-ski.jpg"
				style="width: 384px; height: 274"
				alt="Skiing At Onion River Rd, Lusten MN"
			/>
			<figcaption>Lusten, MN - Moved here in January 2021 to chase more snow!</figcaption>
		</figure>
	</section>
</PageTransition>
