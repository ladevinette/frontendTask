export interface Color {
  HEX: string;
  RGB: string;
  HSL: string;
  isDefault: boolean;
}

export const DEFAULT_COLORS: Color[] = [
  {
    HEX: "#FF0000",
    RGB: "rgb(255,0,0)",
    HSL: "hsl(0, 100%, 50%)",
    isDefault: true,
  },
  {
    HEX: "#00FF00",
    RGB: "rgb(0,255,0)",
    HSL: "hsl(120, 100%, 50%)",
    isDefault: true,
  },
  {
    HEX: "#000000",
    RGB: "rgb(0,0,0)",
    HSL: "hsl(0, 0%, 0%)",
    isDefault: true,
  },
  {
    HEX: "#FFFFFF",
    RGB: "rgb(255,255,255)",
    HSL: "hsl(0, 0%, 100%)",
    isDefault: true,
  },
  {
    HEX: "#FFC0CB",
    RGB: "rgb(255,192,203)",
    HSL: "hsl(350, 100%, 87.6%)",
    isDefault: true,
  },
  {
    HEX: "#5400F0",
    RGB: "rgb(84,0,240)",
    HSL: "hsl(261, 100%, 47.1%)",
    isDefault: true,
  },
];
