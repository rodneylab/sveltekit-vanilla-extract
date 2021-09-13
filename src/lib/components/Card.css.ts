import { summerVars } from '$lib/styles/themes/summerTheme.css';
import { winterVars } from '$lib/styles/themes/winterTheme.css';
import { spacing3, spacing4, spacing6, spacing8 } from '$lib/styles/vars.css';
import { style } from '@vanilla-extract/css';

export const container = style(
	{
		display: 'flex',
		width: '100%'
	},
	'section'
);

export const content = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '60%',
	borderRadius: [spacing3],
	margin: [spacing6, 'auto'],
	padding: [spacing4, spacing8],
	'@media': {
		'(max-width: 768px )': {
			width: '100%'
		}
	}
});

export const summerContent = style(
	{
		background: summerVars.colour.secondary,
		borderStyle: 'solid',
		borderColor: summerVars.colour.light
	},
	'main'
);

export const winterContent = style(
	{
		background: winterVars.colour.secondary,
		borderStyle: 'solid',
		borderColor: winterVars.colour.light
	},
	'main'
);
