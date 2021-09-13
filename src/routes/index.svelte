<script>
	import { browser } from '$app/env';
	import blakeSrc from '$lib/assets/blake.jpg?w=200';
	import blakeSrcsetWebp from '$lib/assets/blake.jpg?w=400;200&format=webp&srcset';
	import blakeSrcset from '$lib/assets/blake.jpg?w=400;200&srcset';
	import riverSrc from '$lib/assets/river.jpg?w=200';
	import riverSrcsetWebp from '$lib/assets/river.jpg?w=400;200&format=webp&srcset';
	import riverSrcset from '$lib/assets/river.jpg?w=400;200&srcset';
	import Card from '$lib/components/Card.svelte';
	import SpeakerPicture from '$lib/components/SpeakerPicture.svelte';
	import talks from '$lib/data/talks.json';
	import { theme } from '$lib/shared/stores/theme';
	import '$lib/styles/styles.css';
	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-serif-pro/400.css';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import {
		abstractText,
		dateText,
		heading,
		speakerName,
		summerAbstractText,
		summerButton,
		summerMain,
		winterAbstractText,
		winterButton,
		winterMain
	} from './index.css';

	const sources = [blakeSrc, riverSrc];
	const sourceSets = [blakeSrcset, riverSrcset];
	const sourceSetsWebp = [blakeSrcsetWebp, riverSrcsetWebp];

	$: themeIsSummer = $theme === 'summer';
	$: abstractTextStyle = `${abstractText} ${
		themeIsSummer ? summerAbstractText : winterAbstractText
	}`;
	$: buttonStyle = themeIsSummer ? summerButton : winterButton;
	$: mainStyle = themeIsSummer ? summerMain : winterMain;
	$: currentIndex = 0;
	$: alt = `Picture of ${talks[currentIndex].speaker}`;
	$: placeholder = talks[currentIndex].profileImageBase64;
	$: src = sources[currentIndex];
	$: srcset = sourceSets[currentIndex];
	$: srcsetWebp = sourceSetsWebp[currentIndex];

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

	let fadeDuration =
		browser && window.matchMedia('(prefers-reduced-motion: no-preference') ? 250 : 2000;
</script>

{#key currentIndex}
	<main class={mainStyle} transition:fly={{ duration: fadeDuration, x: 200 }}>
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
