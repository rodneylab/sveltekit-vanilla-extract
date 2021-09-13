import { summerVars } from '$lib/styles/themes/summerTheme.css';
import { winterVars } from '$lib/styles/themes/winterTheme.css';
import { spacing12, spacing2, spacing4, spacing8 } from '$lib/styles/vars.css';
import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'flex',
	flexDirection: 'column',
	padding: [spacing12, 'auto'],
	minHeight: '100vh',
	'@media': {
		'(max-width: 768px )': {
			padding: [spacing4]
		}
	}
});

export const header = style(
	{
		display: 'flex',
		paddingBottom: [spacing12]
	},
	'header'
);

export const themeButton = style({
	marginLeft: 'auto',
	padding: [spacing2, spacing4],
	borderRadius: [spacing8]
});

export const summerButton = style({
	background: summerVars.colour.dark,
	borderStyle: 'solid',
	borderColor: summerVars.colour.light,
	color: summerVars.colour.secondary,
	':focus': {
		color: summerVars.colour.light
	},
	':hover': {
		color: summerVars.colour.light
	}
});

export const winterButton = style({
	background: winterVars.colour.dark,
	borderStyle: 'solid',
	borderColor: winterVars.colour.light,
	color: winterVars.colour.secondary,
	':focus': {
		color: winterVars.colour.primary
	},
	':hover': {
		color: winterVars.colour.primary
	}
});

export const summerContainer = style(
	{
		background: summerVars.colour.primary
	},
	'main'
);

export const winterContainer = style(
	{
		background: winterVars.colour.primary
	},
	'main'
);
