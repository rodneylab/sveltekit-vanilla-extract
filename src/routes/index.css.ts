import { summerVars } from '$lib/styles/themes/summerTheme.css';
import { winterVars } from '$lib/styles/themes/winterTheme.css';
import {
	fontFamilyHeading,
	fontSize2,
	fontSize4,
	fontWeightBold,
	lineHeightRelaxed,
	spacing0,
	spacing2,
	spacing4,
	spacing6
} from '$lib/styles/vars.css';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const summerMain = style(
	{
		background: summerVars.colour.primary,
		color: summerVars.colour.dark
	},
	'main'
);

export const winterMain = style(
	{
		background: winterVars.colour.primary
	},
	'main'
);

export const heading = style({
	fontSize: [fontSize4],
	minHeight: calc([lineHeightRelaxed]).multiply(fontSize4).multiply(2).toString(),
	marginBottom: [spacing0]
});

export const speakerName = style({
	marginTop: [spacing4],
	marginBottom: [spacing6],
	fontSize: [fontSize4],
	fontFamily: [fontFamilyHeading],
	fontWeight: [fontWeightBold]
});

export const abstractText = style({
	borderRadius: [spacing2],
	fontSize: [fontSize2],
	lineHeight: [lineHeightRelaxed],
	minHeight: calc([lineHeightRelaxed]).multiply(fontSize2).multiply(4).toString(),
	marginTop: [spacing4],
	marginBottom: [spacing6],
	padding: [spacing2, spacing4]
});

export const summerAbstractText = style({
	backgroundColor: summerVars.colour.dark,
	color: summerVars.colour.secondary
});

export const winterAbstractText = style({
	backgroundColor: winterVars.colour.dark,
	color: winterVars.colour.primary
});

export const dateText = style({
	fontSize: [fontSize2],
	fontWeight: [fontWeightBold],
	marginBottom: [spacing4]
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
