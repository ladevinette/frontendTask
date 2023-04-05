import React, { useEffect, useState } from "react";
import AddColor from "../AddColor/AddColor";
import { Color, DEFAULT_COLORS } from "../../constants";
import { sortColorsByRgb } from "../../utils/convertColors";
import FilterColors from "../FilterColors/FilterColors";
import ColorsPaletteDisplay from "../ColorsPaletteDisplay/ColorsPaletteDisplay";
import "./ColorsPalette.scss";

const ColorsPalette: React.FC = () => {
  const [newColor, setNewColor] = useState<string>("");
  const [colors, setColors] = useState<Color[]>(DEFAULT_COLORS);
  const [error, setError] = useState<string>("");
  const [sortedColors, setSortedColors] = useState<Color[]>([]);

  useEffect(() => {
    const savedColors = localStorage.getItem("colors");
    console.log(savedColors);
    if (savedColors) {
      const colors: Color[] = JSON.parse(savedColors);
      const sortedColors: Color[] = sortColorsByRgb(colors);
      setColors(sortedColors);
    }
  }, []);

  useEffect(() => {
    setSortedColors(sortColorsByRgb(colors));
  }, [colors]);

  return (
    <div className="paletteContaianer">
      <AddColor
        newColor={newColor}
        setNewColor={setNewColor}
        error={error}
        setError={setError}
        colors={colors}
        setColors={setColors}
      />
      <FilterColors colors={colors} setSortedColors={setSortedColors} />
      <ColorsPaletteDisplay
        sortedColors={sortedColors}
        colors={colors}
        setColors={setColors}
      />
    </div>
  );
};

export default ColorsPalette;
