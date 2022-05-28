import { themeVars } from '$lib/styles/themes/theme.css';
import { vars } from '$lib/styles/vars.css';
import { style } from '@vanilla-extract/css';

const {
  spacing: { spacing3, spacing4, spacing6, spacing8 },
} = vars;

export const container = style({
  display: 'flex',
  width: '100%',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '60%',
  borderRadius: spacing3,
  margin: [spacing6, 'auto'],
  padding: [spacing4, spacing8],
  '@media': {
    '(max-width: 768px )': {
      width: '100%',
    },
  },
  background: themeVars.colour.secondary,
  borderStyle: 'solid',
  borderColor: themeVars.colour.light,
});
