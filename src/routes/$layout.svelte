<script>
	import '../app.postcss';
	import Nav from '$lib/Nav.svelte';
	import Window from '$lib/Window.svelte';
</script>

<div class="container mx-auto h-screen flex flex-col items-center p-8">
	<Nav />
	<Window containerClass="mt-8" toolbarText="Jack Sloan - Software Developer">
		<main class="p-6">
			<slot />
		</main>
	</Window>
</div>
