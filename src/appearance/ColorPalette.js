const colorPalette = {
  white: '#fff',
  lightGrey: '#BDC2BF',
  grey: '#989C94',
  raisinBlack: '#25291C',
  black: '#0F1108',
  turquoise: '#00F1D3',
  peach: '#F45B69',
  darkBlue: '#10465E',

  snpHeader: '#353535',
  snpSubHeader: '#6a6a6a',
  snpLightGrey1: '#d8d8d8',
  snpLightGrey2: '#f0f0f0',
  snpLightGrey3: '#bcbaba',
  snpBackgroundWhite: '#FFFFFF',
  snpHeaderWhite: '#F6F6F6',
  snpBackgroundGrey: '#F7F7F7',
  snpHeaderGrey: '#ECECEC',
  snpBackgroundBlack: '#202020',
  snpHeaderBlack: '#000000',
};

export default colorPalette;

// https://github.com/allthings/colors/blob/master/src/hexToRgb.js
export const convertHexToRgbA = (hex, alpha = 0.0) => {
  if (hex.lastIndexOf('#') === 0) {
    hex = hex.split('#')[1];
  }
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
    alpha
  ].join(',') : null;
};

export const convertHexToRgbACssProperty =
  (hex, alpha = 0.0) => `rgba(${convertHexToRgbA(hex, alpha)})`;