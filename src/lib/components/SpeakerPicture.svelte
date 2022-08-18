<script lang="ts">
	import { browser } from '$app/env';
	import { image } from '$lib/components/SpeakerPicture.css';
	import { theme } from '$lib/shared/stores/theme';
	import { summerTheme } from '$lib/styles/themes/summerTheme.css';
	import { winterTheme } from '$lib/styles/themes/winterTheme.css';
	import { onMount } from 'svelte';

	export let alt: string;
	export let placeholder: string;
	export let src: string;
	export let srcset: string;
	export let srcsetWebp: string;

	onMount(() => {
		if (browser) {
			document.lazyloadInstance.update();
		}
	});

	$: themeIsSummer = $theme === 'summer';
	$: imageStyle = `${image} ${themeIsSummer ? summerTheme : winterTheme}`;

	const sizes = '200px;';
</script>

<picture>
	<source
		data-sizes="{sizes},"
		data-srcset={srcsetWebp}
		type="image/webp"
		width="200"
		height="200"
	/>
	<source data-sizes="{sizes}," data-srcset={srcset} type="image/jpeg" width="200" height="200" />
	<img
		class={`lazy ${imageStyle}`}
		{alt}
		loading="eager"
		decoding="async"
		width="200"
		height="200"
		data-src={src}
		src={placeholder}
	/>
</picture>
