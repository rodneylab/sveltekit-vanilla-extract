<script lang="ts">
	import { browser } from '$app/environment';
	import { theme } from '$lib/shared/stores/theme';
	import '$lib/styles/styles.css';
	import { summerTheme } from '$lib/styles/themes/summerTheme.css';
	import { winterTheme } from '$lib/styles/themes/winterTheme.css';
	import lazyload from 'vanilla-lazyload';
	import { container, containerMain, header, themeButton } from './layout-styles.css';

	let { children } = $props();

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}

	let themeIsSummer = $derived($theme === 'summer');
	let currentTheme = $derived(themeIsSummer ? summerTheme : winterTheme);
	let buttonText = $derived(themeIsSummer ? 'Summer theme' : 'Winter theme');
	let buttonAriaLabel = $derived(
		themeIsSummer ? 'Switch to Winter theme' : 'Switch to Summer theme',
	);
	let buttonStyle = $derived(`${themeButton} ${currentTheme}`);
</script>

<div class={`${container} ${containerMain} ${currentTheme}`}>
	<header class={header}>
		<button
			aria-label={buttonAriaLabel}
			class={buttonStyle}
			onclick={() => ($theme === 'summer' ? theme.set('winter') : theme.set('summer'))}
			>{buttonText}</button
		>
	</header>
	{@render children?.()}
</div>
