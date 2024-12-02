import { themeVars } from '../styles/themes/theme.css';
import { vars } from '../styles/vars.css';
import { style } from '@vanilla-extract/css';

const {
	spacing: { spacing1 },
} = vars;

export const image = style({
	borderRadius: '50%',
	borderStyle: 'solid',
	borderWidth: spacing1,
	borderColor: themeVars.colour.alternative,
});
