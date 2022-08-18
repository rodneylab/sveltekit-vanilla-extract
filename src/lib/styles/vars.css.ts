import { createGlobalTheme, createVar } from '@vanilla-extract/css';

export const desktopBreakpoint = createVar();
export const lineHeightRelaxed = createVar();

export const vars = createGlobalTheme(':root', {
	spacing: {
		spacingPx: '1px',
		spacing0: '0',
		spacing1: '0.25rem',
		spacing2: '0.5rem',
		spacing3: '0.75rem',
		spacing4: '1rem',
		spacing5: '1.25rem',
		spacing6: '1.5rem',
		spacing8: '2.0rem',
		spacing12: '3.0rem',
	},
	font: {
		family: {
			fontFamilyBody: 'Source Sans Pro',
			fontFamilyHeading: 'Source Serif Pro',
		},
		size: {
			fontSizeRoot: '16px',
			fontSize0: '0.8rem',
			fontSize1: '1rem',
			fontSize2: '1.25rem',
			fontSize3: '1.563rem',
			fontSize4: '1.953rem',
			fontSize5: '2.441rem',
			fontSize6: '3.052rem',
			fontSize7: '3.815rem',
		},
		weight: {
			fontWeightBold: '700',
			fontWeightBlack: '900',
		},
	},
});
