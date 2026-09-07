<script lang="ts">
	import 'tailwindcss/index.css';
	import favicon from '$lib/assets/favicon.svg';
	import LightBox from '$lib/components/lightbox/LightBox.svelte';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { parseTheme, theme, themeStorageKey, type ThemePreference } from '$lib/components/theme/themeStore';

	onMount(() => {
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

		try {
			theme.set(parseTheme(localStorage.getItem(themeStorageKey)));
		} catch {
			theme.set('system');
		}

		function applyTheme(preference: ThemePreference) {
			const dark = preference === 'dark' || (preference === 'system' && systemTheme.matches);
			document.documentElement.classList.toggle('dark', dark);
		}

		const unsubscribe = theme.subscribe((value) => {
			try {
				localStorage.setItem(themeStorageKey, value);
			} catch {}
			applyTheme(value);
		});

		function syncSystemTheme() {
			applyTheme(get(theme));
		}

		function syncStoredTheme(event: StorageEvent) {
			if (event.key === themeStorageKey || event.key === null) {
				theme.set(parseTheme(event.newValue));
			}
		}

		systemTheme.addEventListener('change', syncSystemTheme);
		window.addEventListener('storage', syncStoredTheme);

		return () => {
			unsubscribe();
			systemTheme.removeEventListener('change', syncSystemTheme);
			window.removeEventListener('storage', syncStoredTheme);
		};
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<LightBox />
