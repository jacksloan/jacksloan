(function() {
	const stored = localStorage.getItem('theme');
	document.documentElement.dataset.theme = stored || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
})();
