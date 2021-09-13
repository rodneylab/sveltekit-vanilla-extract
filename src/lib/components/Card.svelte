<script>
	import { theme } from '$lib/shared/stores/theme';
	import { container, content, summerContent, winterContent } from './Card.css';

	$: contentStyle =
		$theme === 'summer' ? `${content} ${summerContent}` : `${content} ${winterContent}`;
</script>

<section class={container}>
	<div class={contentStyle}>
		<slot />
	</div>
</section>
