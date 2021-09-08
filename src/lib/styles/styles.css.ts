import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import {
	colour1,
	colour2,
	colour3,
	colour4,
	fontFamilyBody,
	fontFamilyHeading
} from '$lib/styles/vars.css';

globalFontFace('HeadingFont', {
	src: 'local("SourceSerif Pro")'
});

globalStyle('html, body', {
	vars: {
		[colour1]: '#d11c5b',
		[colour2]: '#f6eed5',
		[colour3]: '#fac600',
		[colour4]: '#ea4b1d',

		[fontFamilyHeading]: 'Source Serif Pro',
		[fontFamilyBody]: 'Source Sans Pro'
	},

	background: [colour1],
	color: [colour2],
	fontFamily: [fontFamilyBody]
});

globalStyle('h1', {
	fontFamily: [fontFamilyHeading],
	color: [colour2]
});

globalStyle('p', {
	fontFamily: [fontFamilyBody],
	color: [colour3]
});
