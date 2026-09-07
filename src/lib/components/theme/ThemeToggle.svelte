<script lang="ts">
	import { theme } from './themeStore';
</script>

<div class="flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-600 [.dark_&]:border-neutral-800 [.dark_&]:bg-neutral-950 [.dark_&]:text-neutral-300">
	<label for="theme-preference">Theme</label>
	<select
		id="theme-preference"
		bind:value={$theme}
		class="min-h-7 cursor-pointer rounded bg-transparent pl-1 pr-1 text-xs font-medium text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 [.dark_&]:text-neutral-100"
	>
		<option value="system">System</option>
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select>
</div>
