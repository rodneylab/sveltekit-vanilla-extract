import { createTheme } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const winterTheme = createTheme(themeVars, {
	colour: {
		primary: '#f56a79', // ultra red
		secondary: '#1aa6b7', // pacific blue
		alternative: '#ff414d', // red salsa
		light: '#f6eed5', // eggshell
		dark: '#002a32', // gunmetal
	},
});
