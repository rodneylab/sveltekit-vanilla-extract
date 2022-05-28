import { desktopBreakpoint, lineHeightRelaxed, vars } from '$lib/styles/vars.css';
import { globalFontFace, globalStyle } from '@vanilla-extract/css';

const {
  font: {
    family: { fontFamilyBody, fontFamilyHeading },
    size: { fontSize2 },
    weight: { fontWeightBlack },
  },
  spacing: { spacing0, spacing2, spacing4 },
} = vars;

globalFontFace('HeadingFont', {
  src: 'local("Source Serif Pro")',
});

globalStyle('html, body', {
  vars: {
    [desktopBreakpoint]: '48rem',
    [lineHeightRelaxed]: '1.75',
  },

  fontFamily: fontFamilyBody,
});

globalStyle('body', {
  margin: [spacing0],
});

globalStyle('h1', {
  fontFamily: fontFamilyHeading,
});

globalStyle('p', {
  fontFamily: fontFamilyBody,
});

globalStyle('button', {
  cursor: 'pointer',
  padding: [spacing2, spacing4],
  fontSize: fontSize2,
  fontFamily: fontFamilyHeading,
  fontWeight: fontWeightBlack,
  lineHeight: [lineHeightRelaxed],
  borderStyle: 'none',
  borderRadius: spacing2,
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      transition: ['color', '250ms'],
    },
    '(prefers-reduced-motion: reduce)': {
      transition: ['color', '2000ms'],
    },
  },
});
