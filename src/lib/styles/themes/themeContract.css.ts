import { createThemeContract } from '@vanilla-extract/css';

export const themeContract = createThemeContract({
	colour: {
		primary: null,
		secondary: null,
		alternative: null,
		light: null,
		dark: null
	}
});
