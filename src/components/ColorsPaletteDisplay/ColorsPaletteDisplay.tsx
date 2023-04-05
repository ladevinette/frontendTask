import React from "react";
import { Color } from "../../constants";
import ColorTile from "../ColorTile/ColorTile";
import "./ColorsPaletteDisplay.scss";

type Props = {
  sortedColors: Color[];
  colors: Color[];
  setColors: React.Dispatch<React.SetStateAction<Color[]>>;
};

const ColorsPaletteDisplay: React.FC<Props> = ({
  sortedColors,
  colors,
  setColors,
}) => {
  const deleteColor = (index: number) => {
    const newColors: Color[] = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
    localStorage.setItem("colors", JSON.stringify(newColors));
  };

  return (
    <div className="colorsPalette">
      {sortedColors.map((color: Color, index: number) => (
        <ColorTile
          key={index}
          color={color}
          index={index}
          deleteColor={deleteColor}
        />
      ))}
    </div>
  );
};

export default ColorsPaletteDisplay;
