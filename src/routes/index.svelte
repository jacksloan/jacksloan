<script lang="ts">
	import PageTransition from '$lib/PageTransition.svelte';
	import { page } from '$app/stores';
	import YoutubeIcon from 'svelte-feather-icons/src/icons/YoutubeIcon.svelte';
	import GithubIcon from 'svelte-feather-icons/src/icons/GithubIcon.svelte';
	import InstagramIcon from 'svelte-feather-icons/src/icons/InstagramIcon.svelte';
	import LinkedInIcon from 'svelte-feather-icons/src/icons/LinkedinIcon.svelte';
	import EmailIcon from 'svelte-feather-icons/src/icons/MailIcon.svelte';

	type SocialTuple = [string, string, any, string];
	const socialLinks: Array<SocialTuple> = [
		[`Jack's LinkedIn`, 'https://www.linkedin.com/in/jack-sloan/', LinkedInIcon, 'LinkedIn'],
		[`Jack's Github`, 'https://www.github.com/jacksloan', GithubIcon, 'Github'],
		[`Jack's Youtube`, 'https://www.youtube.com/user/jbsloan1/featured', YoutubeIcon, 'Youtube'],
		[`Jack's Instagram`, 'https://www.instagram.com/jaack.sloan/', InstagramIcon, 'Instagram']
	];
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
		<h2>About</h2>
		<p>This is a test preview</p>

		<h3>Find me online</h3>
		<ul class="list-none">
			{#each socialLinks as [label, link, component, title]}
				<li>
					<a class="social-link" aria-label={label} href={link} target="_blank">
						<svelte:component this={component} size={'24'} />
						<span>{title}</span>
					</a>
				</li>
			{/each}
		</ul>

		<h3 class="pb-0 mb-0">Get in touch</h3>
		<a class="social-link p-0 m-0" href="mailto:hi@jacksloan.dev">
			<EmailIcon size={'24'} />
			<p>hi@jacksloan.dev</p>
		</a>

		<figure class="h-80 block">
			<img
				src="/onion-river-ski.jpg"
				style="width: 384px; height: 274"
				alt="Skiing At Onion River Rd, Lusten MN"
			/>
			<figcaption class="-mt-4">Onion River Road - 2021</figcaption>
		</figure>
	</section>
</PageTransition>

<style lang="postcss">
	.social-link {
		@apply inline-flex flex-row gap-2 items-center text-blue-400 px-2 py-1;
	}
</style>
