import { createTheme } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const summerTheme = createTheme(themeVars, {
	colour: {
		primary: '#d11c5b', // rubine red
		secondary: '#fac600', // mikado yellow
		alternative: '#ea4b1d', // flame
		light: '#f6eed5', // eggshell
		dark: '#32373b', // onyx
	},
});
