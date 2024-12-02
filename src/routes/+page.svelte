<script lang="ts">
	import { browser } from '$app/environment';
	import blakeSrc from '$lib/assets/blake.jpg?w=200';
	import blakeSrcsetWebp from '$lib/assets/blake.jpg?w=400;200&format=webp&as=srcset';
	import blakeSrcset from '$lib/assets/blake.jpg?w=400;200&as=srcset';
	import riverSrc from '$lib/assets/river.jpg?w=200';
	import riverSrcsetWebp from '$lib/assets/river.jpg?w=400;200&format=webp&as=srcset';
	import riverSrcset from '$lib/assets/river.jpg?w=400;200&as=srcset';
	import Card from '$lib/components/Card.svelte';
	import SpeakerPicture from '$lib/components/SpeakerPicture.svelte';
	import talks from '$lib/data/talks.json';
	import { theme } from '$lib/shared/stores/theme';
	import '$lib/styles/styles.css';
	import { summerTheme } from '$lib/styles/themes/summerTheme.css';
	import { winterTheme } from '$lib/styles/themes/winterTheme.css';
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-serif-pro/400.css';
	import { sineInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { abstractText, button, dateText, heading, main, speakerName } from './index-styles.css';

	const sources = [blakeSrc, riverSrc];
	const sourceSets = [blakeSrcset, riverSrcset];
	const sourceSetsWebp = [blakeSrcsetWebp, riverSrcsetWebp];

	let currentIndex = $state(0);

	let themeIsSummer = $derived($theme === 'summer');
	let currentTheme = $derived(themeIsSummer ? summerTheme : winterTheme);
	let abstractTextStyle = $derived(`${abstractText} ${currentTheme}`);
	let buttonStyle = $derived(`${button} ${currentTheme}`);
	let mainStyle = $derived(`${main} ${themeIsSummer ? summerTheme : winterTheme}`);
	let alt = $derived(`Picture of ${talks[currentIndex].speaker}`);
	let placeholder = $derived(talks[currentIndex].profileImageBase64);
	let src = $derived(sources[currentIndex]);
	let srcset = $derived(sourceSets[currentIndex]);
	let srcsetWebp = $derived(sourceSetsWebp[currentIndex]);

	const transitionInterval = 5000;

	function advanceIndex() {
		currentIndex = (currentIndex + 1) % 2;
	}

	function startTransitions() {
		setTimeout(transitionSlides, transitionInterval);
	}

	function transitionSlides() {
		advanceIndex();
		startTransitions();
	}

	startTransitions();

	let flyDuration =
		browser && window.matchMedia('(prefers-reduced-motion: no-preference') ? 1000 : 2000;
</script>

<svelte:head>
	<title>SvelteKit Vanilla Extract: Course Registration Example</title>
</svelte:head>
{#key currentIndex}
	<main class={mainStyle} in:fly={{ duration: flyDuration, x: -100, easing: sineInOut }} out:fade>
		<Card>
			<h1 class={heading}>{talks[currentIndex].title}</h1>
			<SpeakerPicture {alt} {src} {srcset} {srcsetWebp} {placeholder} />
			<div class={speakerName}>{talks[currentIndex].speaker}</div>
			<div class={abstractTextStyle}>{talks[currentIndex].abstract}</div>
			<div class={dateText}>{talks[currentIndex].date}</div>
			<button class={buttonStyle} type="button"> Book now!</button>
		</Card>
	</main>
{/key}
