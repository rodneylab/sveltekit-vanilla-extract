import { themeVars } from '$lib/styles/themes/theme.css';
import { spacing1 } from '$lib/styles/vars.css';
import { style } from '@vanilla-extract/css';

export const image = style({
  borderRadius: '50%',
  borderStyle: 'solid',
  borderWidth: [spacing1],
  borderColor: themeVars.colour.alternative,
});
