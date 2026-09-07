import { writable } from 'svelte/store';

export type ThemePreference = 'system' | 'light' | 'dark';

export const themeStorageKey = 'theme-preference';
export const theme = writable<ThemePreference>('system');

export function parseTheme(value: string | null): ThemePreference {
	return value === 'light' || value === 'dark' ? value : 'system';
}
