import { themeVars } from '$lib/styles/themes/theme.css';
import {
  fontFamilyHeading,
  fontSize2,
  fontSize4,
  fontSize5,
  fontWeightBold,
  lineHeightRelaxed,
  spacing0,
  spacing2,
  spacing4,
  spacing6,
} from '$lib/styles/vars.css';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const main = style({
  background: themeVars.colour.primary,
  color: themeVars.colour.dark,
});

export const heading = style({
  fontSize: [fontSize5],
  minHeight: calc(lineHeightRelaxed).multiply(fontSize4).multiply(2).toString(),
  marginBottom: [spacing0],
  textAlign: 'center',
});

export const speakerName = style({
  marginTop: [spacing4],
  marginBottom: [spacing6],
  fontSize: [fontSize4],
  fontFamily: [fontFamilyHeading],
  fontWeight: [fontWeightBold],
});

export const abstractText = style({
  borderRadius: [spacing2],
  fontSize: [fontSize2],
  lineHeight: [lineHeightRelaxed],
  minHeight: calc(lineHeightRelaxed).multiply(fontSize2).multiply(4).toString(),
  marginTop: [spacing4],
  marginBottom: [spacing6],
  padding: [spacing2, spacing4],
  backgroundColor: themeVars.colour.dark,
  color: themeVars.colour.secondary,
});

export const dateText = style({
  fontSize: [fontSize2],
  fontWeight: [fontWeightBold],
  marginBottom: [spacing4],
});

export const button = style({
  borderStyle: 'solid',
  fontSize: fontSize4,
  background: themeVars.colour.dark,
  borderColor: themeVars.colour.light,
  color: themeVars.colour.secondary,
  ':focus': {
    color: themeVars.colour.light,
  },
  ':hover': {
    color: themeVars.colour.light,
  },
});
