<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
    import LightBox from '$lib/components/lightbox/LightBox.svelte';
    import ThemeToggle from '$lib/components/theme/ThemeToggle.svelte';
    import { onMount } from 'svelte';
    import { theme } from '$lib/components/theme/themeStore';
	
	// Watch for Theme
	onMount(() => {
		const savedTheme = localStorage.getItem('theme');

		if (savedTheme === 'dark' || savedTheme === 'light') {
			theme.set(savedTheme);
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			theme.set('dark');
		} else {
			theme.set('light');
		}

		document.documentElement.classList.toggle('dark', $theme === 'dark');

		theme.subscribe((value) => {
			localStorage.setItem('theme', value);
			document.documentElement.classList.toggle('dark', value === 'dark');
		});
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<LightBox/>

<ThemeToggle/>