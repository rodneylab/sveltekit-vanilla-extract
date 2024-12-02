<script lang="ts">
	import { browser } from '$app/environment';
	import { image } from '$lib/components/SpeakerPicture.css';
	import { theme } from '$lib/shared/stores/theme';
	import { summerTheme } from '$lib/styles/themes/summerTheme.css';
	import { winterTheme } from '$lib/styles/themes/winterTheme.css';
	import { onMount } from 'svelte';

	let {
		alt,
		placeholder,
		src,
		srcset,
		srcsetWebp,
	}: { alt: string; placeholder: string; src: string; srcset: string; srcsetWebp: string } =
		$props();

	onMount(() => {
		if (browser) {
			document.lazyloadInstance.update();
		}
	});

	let themeIsSummer = $derived($theme === 'summer');
	let imageStyle = $derived(`${image} ${themeIsSummer ? summerTheme : winterTheme}`);

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
