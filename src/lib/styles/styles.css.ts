import {
	desktopBreakpoint,
	fontFamilyBody,
	fontFamilyHeading,
	fontSize0,
	fontSize1,
	fontSize2,
	fontSize3,
	fontSize4,
	fontSize5,
	fontSize6,
	fontSize7,
	fontSizeRoot,
	fontWeightBlack,
	fontWeightBold,
	lineHeightRelaxed,
	spacing0,
	spacing1,
	spacing12,
	spacing2,
	spacing3,
	spacing4,
	spacing5,
	spacing6,
	spacing8,
	spacingPx
} from '$lib/styles/vars.css';
import { globalFontFace, globalStyle, style } from '@vanilla-extract/css';

export const screenReaderText = style({
	border: 0,
	clip: 'rect(1px, 1px, 1px, 1px)',
	clipPath: 'inset(50%)',
	height: '1px',
	margin: '-1px',
	width: '1px',
	overflow: 'hidden',
	position: 'absolute',
	wordWrap: 'normal'
});

globalFontFace('HeadingFont', {
	src: 'local("Source Serif Pro")'
});

globalStyle('html, body', {
	vars: {
		[desktopBreakpoint]: '48rem',
		[fontFamilyHeading]: 'Source Serif Pro',
		[fontFamilyBody]: 'Source Sans Pro',

		[fontSizeRoot]: '16px',
		[fontSize0]: '0.8rem',
		[fontSize1]: '1rem',
		[fontSize2]: '1.25rem',
		[fontSize3]: '1.563rem',
		[fontSize4]: '1.953rem',
		[fontSize5]: '2.441rem',
		[fontSize6]: '3.052rem',
		[fontSize7]: '3.815rem',

		[fontWeightBold]: '700',
		[fontWeightBlack]: '900',

		[lineHeightRelaxed]: '1.75',

		[spacingPx]: '1px',
		[spacing0]: '0',
		[spacing1]: '0.25rem',
		[spacing2]: '0.5rem',
		[spacing3]: '0.75rem',
		[spacing4]: '1rem',
		[spacing5]: '1.25rem',
		[spacing6]: '1.5rem',
		[spacing8]: '2.0rem',
		[spacing12]: '3.0rem'
	},

	fontFamily: [fontFamilyBody]
});

globalStyle('body', {
	margin: [spacing0]
});

globalStyle('h1', {
	fontFamily: [fontFamilyHeading]
});

globalStyle('p', {
	fontFamily: [fontFamilyBody]
});

globalStyle('button', {
	cursor: 'pointer',
	padding: [spacing2, spacing4],
	fontSize: [fontSize2],
	fontFamily: [fontFamilyHeading],
	fontWeight: [fontWeightBlack],
	lineHeight: [lineHeightRelaxed],
	borderStyle: 'none',
	borderRadius: [spacing2],
	'@media': {
		'(prefers-reduced-motion: no-preference)': {
			transition: ['color', '250ms']
		},
		'(prefers-reduced-motion: reduce)': {
			transition: ['color', '2000ms']
		}
	}
});
