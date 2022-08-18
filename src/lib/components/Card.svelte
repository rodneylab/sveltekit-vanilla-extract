<script lang="ts">
	import { theme } from '$lib/shared/stores/theme';
	import { summerTheme } from '$lib/styles/themes/summerTheme.css';
	import { winterTheme } from '$lib/styles/themes/winterTheme.css';
	import { container, content } from './Card.css';

	$: themeIsSummer = $theme === 'summer';
	$: contentStyle = `${content}  ${themeIsSummer ? summerTheme : winterTheme}`;
</script>

<section class={container}>
	<div class={contentStyle}>
		<slot />
	</div>
</section>
