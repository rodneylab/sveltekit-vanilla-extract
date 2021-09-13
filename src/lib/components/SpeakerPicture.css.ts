import { summerVars } from '$lib/styles/themes/summerTheme.css';
import { winterVars } from '$lib/styles/themes/winterTheme.css';
import { spacing1 } from '$lib/styles/vars.css';
import { style } from '@vanilla-extract/css';

export const image = style({
	borderRadius: '50%',
	borderStyle: 'solid',
	borderWidth: [spacing1]
});

export const summerImage = style({
	borderColor: summerVars.colour.alternative
});

export const winterImage = style({
	borderColor: winterVars.colour.alternative
});
