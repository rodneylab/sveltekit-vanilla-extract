import { themeVars } from '$lib/styles/themes/theme.css';
import { spacing12, spacing2, spacing4, spacing8 } from '$lib/styles/vars.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: [spacing12, 'auto'],
  minHeight: '100vh',
  '@media': {
    '(max-width: 768px )': {
      padding: [spacing4],
    },
  },
});

export const header = style({
  display: 'flex',
  paddingBottom: [spacing12],
});

export const themeButton = style({
  marginLeft: 'auto',
  padding: [spacing2, spacing4],
  borderRadius: [spacing8],
  background: themeVars.colour.dark,
  borderStyle: 'solid',
  borderColor: themeVars.colour.light,
  color: themeVars.colour.secondary,
  ':focus': {
    color: themeVars.colour.light,
  },
  ':hover': {
    color: themeVars.colour.light,
  },
});

export const containerMain = style({
  background: themeVars.colour.primary,
});
