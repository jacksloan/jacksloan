class SiteNav extends HTMLElement {
	connectedCallback() {
		const path = window.location.pathname;
		const isHome = path === '/' || path.endsWith('/index.html');
		const isProjects = path.endsWith('/projects.html');

		this.innerHTML = `
			<nav>
				<ul>
					<li><a href="/"${isHome ? ' aria-current="page"' : ''}>Home</a></li>
					<li><a href="/projects.html"${isProjects ? ' aria-current="page"' : ''}>Projects</a></li>
				</ul>
				<div class="social">
					<a href="https://github.com/jacksloan" target="_blank" rel="noopener" aria-label="Jack's Github">
						<svg viewBox="0 0 24 24" fill="currentColor"><use href="assets/icons.svg#github"></use></svg>
					</a>
					<a href="https://www.linkedin.com/in/jack-sloan/" target="_blank" rel="noopener" aria-label="Jack's LinkedIn">
						<svg viewBox="0 0 24 24" fill="currentColor"><use href="assets/icons.svg#linkedin"></use></svg>
					</a>
					<a href="https://www.youtube.com/user/jbsloan1/featured" target="_blank" rel="noopener" aria-label="Jack's Youtube">
						<svg viewBox="0 0 24 24" fill="currentColor"><use href="assets/icons.svg#youtube"></use></svg>
					</a>
					<a href="https://www.instagram.com/lutsenjack/" target="_blank" rel="noopener" aria-label="Jack's Instagram">
						<svg viewBox="0 0 24 24" fill="currentColor"><use href="assets/icons.svg#instagram"></use></svg>
					</a>
					<button class="theme-toggle" aria-label="Toggle light/dark theme">
						<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<use href="assets/icons.svg#sun"></use>
						</svg>
						<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<use href="assets/icons.svg#moon"></use>
						</svg>
					</button>
				</div>
			</nav>
		`;
	}
}

customElements.define('site-nav', SiteNav);
