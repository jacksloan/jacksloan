<script lang="ts">
	import { page } from '$app/stores';
	import PageTransition from '$lib/PageTransition.svelte';
	let email = '';

	function setMailToAddress() {
		email = ['jbsloan10', '@', 'gmail.com'].join('');
	}
</script>

<svelte:head>
	<title>Jack Sloan | Contact</title>
	<meta
		name="description"
		content="Contact Me. Interested in working together? Feel free to reach out!"
	/>
</svelte:head>

<PageTransition refresh={$page.url.pathname}>
	<section class="prose">
		<h2 class="text-xl">Contact</h2>
		<p>Interested in working together? Feel free to reach out!</p>
		<dl>
			<dt>Email</dt>
			<dd>
				<a on:mouseover={setMailToAddress} href="mailto:{email}">jbsloan10 at gmail dot com</a>
			</dd>

			<dt>Github</dt>
			<dd>
				<a rel="noopener" href="https://github.com/jacksloan/" target="_blank"
					>https://github.com/jacksloan/</a
				>
			</dd>
		</dl>
	</section>
</PageTransition>

<style>
	a {
		@apply text-blue-500;
	}

	dd {
		@apply ml-6;
	}

	dt {
		@apply text-lg font-semibold;
	}
</style>
