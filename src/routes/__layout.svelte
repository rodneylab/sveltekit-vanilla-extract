<script>
	import { browser } from '$app/env';
	import { theme } from '$lib/shared/stores/theme';
	import '$lib/styles/styles.css';
	import { summerTheme } from '$lib/styles/themes/summerTheme.css';
	import { winterTheme } from '$lib/styles/themes/winterTheme.css';
	import lazyload from 'vanilla-lazyload';
	import {
		container,
		header,
		summerButton,
		summerContainer,
		themeButton,
		winterButton,
		winterContainer
	} from './layout.css';

	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}

	$: themeIsSummer = $theme === 'summer';
	$: buttonText = themeIsSummer ? 'Summer theme' : 'Winter theme';
	$: buttonAriaLabel = themeIsSummer ? 'Switch to Winter theme' : 'Switch to Summer theme';
	$: buttonStyle = themeIsSummer
		? `${themeButton} ${summerButton}`
		: `${themeButton} ${winterButton}`;
</script>

<div
	class={$theme === 'winter'
		? `${container} ${winterTheme} ${winterContainer}`
		: `${container} ${summerTheme} ${summerContainer}`}
>
	<!-- svelte-ignore component-name-lowercase -->
	<header class={header}>
		<button
			aria-label={buttonAriaLabel}
			class={buttonStyle}
			on:click={() => ($theme === 'summer' ? theme.set('winter') : theme.set('summer'))}
			>{buttonText}</button
		>
	</header>
	<slot />
</div>
