import React, { useEffect, useState } from "react";
import { Color } from "../../constants";
import {
  filterColorsBlue,
  filterColorsGreen,
  filterColorsRed,
  filterColorsSaturation,
} from "../../utils/filterColors";
import "./FilterColors.scss";
type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;

type Props = {
  colors: Color[];
  setSortedColors: React.Dispatch<React.SetStateAction<Color[]>>;
};

const FilterColors: React.FC<Props> = ({ colors, setSortedColors }) => {
  const [isRedChecked, setIsRedChecked] = useState(false);
  const [isGreenChecked, setIsGreenChecked] = useState(false);
  const [isBlueChecked, setIsBlueChecked] = useState(false);
  const [isSAaturationChecked, setIsSaturationChecked] = useState(false);

  useEffect(() => {
    const filterColors = (array: Color[]) => {
      let filteredColors = array;

      if (isRedChecked) {
        filteredColors = filterColorsRed(filteredColors, isRedChecked);
      }

      if (isGreenChecked) {
        filteredColors = filterColorsGreen(filteredColors, isGreenChecked);
      }

      if (isBlueChecked) {
        filteredColors = filterColorsBlue(filteredColors, isBlueChecked);
      }

      if (isSAaturationChecked) {
        filteredColors = filterColorsSaturation(
          filteredColors,
          isSAaturationChecked
        );
      }

      setSortedColors(filteredColors);
    };
    filterColors(colors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    colors,
    isGreenChecked,
    isRedChecked,
    isBlueChecked,
    isSAaturationChecked,
  ]);

  const onRedCheckBoxChange: InputChangeEventHandler = (e): void => {
    const isChecked: boolean = e.target.checked;
    setIsRedChecked(isChecked);
  };

  const onGreenCheckBoxChange: InputChangeEventHandler = (e): void => {
    const isChecked: boolean = e.target.checked;
    setIsGreenChecked(isChecked);
  };

  const onBlueCheckBoxChange: InputChangeEventHandler = (e): void => {
    const isChecked: boolean = e.target.checked;
    setIsBlueChecked(isChecked);
  };

  const onSaturationCheckBoxChange: InputChangeEventHandler = (e): void => {
    const isChecked: boolean = e.target.checked;
    setIsSaturationChecked(isChecked);
  };

  return (
    <div className="filtersContainer">
      <form className="filtersForm">
        <div className="filterContainer">
          <input
            onChange={onRedCheckBoxChange}
            type="checkbox"
            id="checkbox1"
            checked={isRedChecked}
          />
          <label htmlFor="checkbox1">Red {">"} 50%</label>
        </div>

        <div className="filterContainer">
          <input
            onChange={onGreenCheckBoxChange}
            type="checkbox"
            id="checkbox2"
          />
          <label htmlFor="checkbox2">Green{">"} 50%</label>
        </div>

        <div className="filterContainer">
          <input
            onChange={onBlueCheckBoxChange}
            type="checkbox"
            id="checkbox3"
          />
          <label htmlFor="checkbox3">Blue {">"} 50%</label>
        </div>

        <div className="filterContainer">
          <input
            onChange={onSaturationCheckBoxChange}
            type="checkbox"
            id="checkbox4"
          />
          <label htmlFor="checkbox4">Saturation {">"} 50%</label>
        </div>
      </form>
    </div>
  );
};

export default FilterColors;
