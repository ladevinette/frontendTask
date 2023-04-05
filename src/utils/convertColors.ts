import { Color } from "../constants";

export const rgbToHSL = (hex: string) => {
  const rgbString: string = hexToRgb(hex);
  let [r, g, b] = rgbString
    .substring(rgbString.indexOf("(") + 1, rgbString.lastIndexOf(")"))
    .split(",")
    .map((val) => parseInt(val));
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return (
    "hsl(" +
    (60 * h < 0 ? (60 * h + 360).toFixed(1) : (60 * h).toFixed(0)) +
    ", " +
    (100 * (s ? (l <= 0.5 ? s / (2 * l) : s / (2 - 2 * l)) : 0)).toFixed(1) +
    "%, " +
    ((100 * (2 * l - s)) / 2).toFixed(1) +
    "%)"
  );
};

export const hexToRgb = (hex: string): string => {
  // Remove the '#' symbol if present
  hex = hex.replace("#", "");

  // Convert the hex values to decimal
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB values as an object
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
};

export function sortColorsByRgb(colors: Color[]): Color[] {
  return colors.sort((a, b) => {
    const [aRed, aGreen, aBlue] = a.RGB.replace(/rgb\(|\)/gi, "")
      .split(",")
      .map((val) => parseInt(val));
    const [bRed, bGreen, bBlue] = b.RGB.replace(/rgb\(|\)/gi, "")
      .split(",")
      .map((val) => parseInt(val));

    if (aRed !== bRed) {
      return bRed - aRed;
    }
    if (aGreen !== bGreen) {
      return bGreen - aGreen;
    }
    if (aBlue !== bBlue) {
      return bBlue - aBlue;
    }

    return 0; // return 0 to maintain original order of equal colors
  });
}
