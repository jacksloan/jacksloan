<script>
	import { slide, fade } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div in:slide={{ duration: 250, delay: 300 }} out:slide={{ duration: 250 }}>
		<div out:fade={{ duration: 150 }} in:fade={{ duration: 250, delay: 350 }}>
			<slot />
		</div>
	</div>
{/key}
