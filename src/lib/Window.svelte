<script lang="ts">
	export let toolbarText = '';
	export let containerClass = '';
</script>

<div class="relative w-full max-w-4xl bg-white shadow-xl rounded-lg {containerClass}">
	<div class="relative px-2 t-0 l-0 w-full h-6 bg-gray-100 rounded-t-lg top-0 left-0 text-center">
		<div class="absolute l-0 t-0 w-64 h-full flex flex-row gap-2 items-center">
			<div class="dot bg-red-500" />
			<div class="dot bg-yellow-500" />
			<div class="dot bg-green-500" />
		</div>
		<h1 class="text-md font-medium">{toolbarText}</h1>
	</div>
	<slot />
</div>

<style lang="postcss">
	.dot {
		@apply rounded-full w-3 h-3;
	}
</style>
