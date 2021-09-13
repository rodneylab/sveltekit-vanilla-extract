<script>
	import { browser } from '$app/env';
	import { image, summerImage, winterImage } from '$lib/components/SpeakerPicture.css';
	import { theme } from '$lib/shared/stores/theme';
	import { onMount } from 'svelte';

	export let alt;
	export let placeholder;
	export let src;
	export let srcset;
	export let srcsetWebp;

	onMount(() => {
		if (browser) {
			document.lazyloadInstance.update();
		}
	});

	$: imageStyle = $theme === 'summer' ? `${image} ${summerImage}` : `${image} ${winterImage}`;

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
