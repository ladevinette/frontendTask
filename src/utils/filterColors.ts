import { Color } from "../constants";

export const filterColorsRed = (
  array: Color[],
  isRedChecked: boolean
): Color[] => {
  if (!isRedChecked) {
    return array;
  }

  const filteredColors = array.filter((color) => {
    const rgbValues: string[] = color.RGB.split(",");
    const redValue: number = parseInt(rgbValues[0].split("(")[1]);
    return redValue > 127;
  });

  return filteredColors;
};

export const filterColorsGreen = (
  array: Color[],
  isGreenChecked: boolean
): Color[] => {
  if (!isGreenChecked) {
    return array;
  }

  const filteredColors: Color[] = array.filter((color) => {
    const rgbValues: string[] = color.RGB.split(",");
    const greenValue: number = parseInt(rgbValues[1]);
    return greenValue > 127;
  });

  return filteredColors;
};

export const filterColorsBlue = (
  array: Color[],
  isBlueChecked: boolean
): Color[] => {
  if (!isBlueChecked) {
    return array;
  }

  const filteredColors: Color[] = array.filter((color) => {
    const rgbValues: string[] = color.RGB.split(",");
    const blueValue: number = parseInt(rgbValues[2]);
    return blueValue > 127;
  });

  return filteredColors;
};

export const filterColorsSaturation = (
  array: Color[],
  isSaturationChecked: boolean
): Color[] => {
  if (!isSaturationChecked) {
    return array;
  }

  const filteredColors = array.filter((color) => {
    const hslValues = color.HSL.split(",");
    const saturation = parseInt(hslValues[1].slice(0, -1));
    return saturation > 50;
  });

  return filteredColors;
};
