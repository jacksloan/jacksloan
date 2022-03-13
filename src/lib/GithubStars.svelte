<script lang="ts">
	export let stargazers: number;
	export let link: string;
	export let projectName: string;
</script>

<div class="widget widget-lg">
	<a
		class="btn"
		href={link}
		rel="noopener"
		target="_blank"
		aria-label="Star {projectName} on GitHub"
		><svg viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-star" aria-hidden="true"
			><path
				fill-rule="evenodd"
				d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
			/></svg
		>&nbsp;<span>Star</span></a
	><a
		class="social-count"
		href={link}
		rel="noopener"
		target="_blank"
		aria-label="{stargazers} stargazers on {projectName}">{stargazers}</a
	>
</div>

<style lang="postcss">
	a {
		text-decoration: none;
		outline: 0;
	}
	.widget {
		display: inline-block;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
	}
	.btn,
	.social-count {
		@apply relative inline-flex cursor-pointer select-none font-semibold align-bottom bg-repeat-x;
		height: 14px;
		padding: 2px 5px;
		font-size: 11px;
		line-height: 14px;
		background-position: -1px -1px;
		background-size: 110% 110%;
		border: 1px solid;
	}
	.btn {
		@apply rounded;
	}
	.btn:not(:last-child) {
		border-radius: 0.25em 0 0 0.25em;
	}
	.social-count {
		border-left: 0;
		border-radius: 0 0.25em 0.25em 0;
	}
	.widget-lg .btn,
	.widget-lg .social-count {
		height: 28px;
		padding: 5px 10px;
		font-size: 12px;
		line-height: 16px;
	}
	.btn {
		color: #24292f;
		background-color: #ebf0f4;
		border-color: #ccd1d5;
		border-color: rgba(27, 31, 36, 0.15);
		background-image: linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);
	}
	:root .btn {
		filter: none;
	}
	.btn:focus,
	.btn:hover {
		background-color: #e9ebef;
		background-position: 0 -0.5em;
		border-color: #caccd1;
		border-color: rgba(27, 31, 36, 0.15);
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e");
		background-image: linear-gradient(180deg, #f3f4f6, #e9ebef 90%);
	}
	:root .btn:focus,
	:root .btn:hover {
		filter: none;
	}
	.btn:active {
		background-color: #e5e9ed;
		border-color: #c7cbcf;
		border-color: rgba(27, 31, 36, 0.15);
		box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 36, 0.15);
		background-image: none;
		filter: none;
	}
	.social-count {
		color: #24292f;
		background-color: #fff;
		border-color: #ddddde;
		border-color: rgba(27, 31, 36, 0.15);
	}
	.social-count:focus,
	.social-count:hover {
		color: #0969da;
	}
</style>
