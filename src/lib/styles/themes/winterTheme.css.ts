import { createTheme } from '@vanilla-extract/css';

export const [winterTheme, winterVars] = createTheme({
	colour: {
		primary: '#f56a79', // ultra red
		secondary: '#1aa6b7', // pacific blue
		alternative: '#ff414d', // red salsa
		light: '#f6eed5', // azure x 11 web colour
		dark: '#002a32' // gunmetal
	}
});
