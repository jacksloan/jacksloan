document.querySelector('.theme-toggle').addEventListener('click', function() {
	const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
	document.documentElement.dataset.theme = next;
	localStorage.setItem('theme', next);
});
