import React from "react";
import { Color } from "../../constants";
import { hexToRgb, rgbToHSL } from "../../utils/convertColors";
import "./AddColor.scss";

type Props = {
  newColor: string;
  setNewColor: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setColors: React.Dispatch<React.SetStateAction<Color[]>>;
  error: string;
  colors: Color[];
};

type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;

const AddColor: React.FC<Props> = ({
  newColor,
  setNewColor,
  setError,
  error,
  colors,
  setColors,
}) => {
  const onChange: InputChangeEventHandler = (e) => {
    const value: string = e.target.value;

    const newValue: string = value
      .replace(/^[^#]*|[^a-zA-Z0-9]/g, "")
      .toUpperCase();

    let error: string = "";
    if (value.length > 0 && value[0] !== "#") {
      error = "The first character must be '#'!";
    } else if (value.indexOf("#", 1) !== -1) {
      error = "Only one '#' character is allowed!";
    }

    setNewColor(newValue);
    setError(error);
  };

  const addNewColour = () => {
    const hexRegex: RegExp = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (hexRegex.test(newColor)) {
      const addNewColor = {
        HEX: newColor,
        RGB: hexToRgb(newColor),
        HSL: rgbToHSL(newColor),
        isDefault: false,
      };
      const newColors: Color[] = [...colors, addNewColor];
      setColors(newColors);
      localStorage.setItem("colors", JSON.stringify(newColors));
    } else {
      setError("This is not valid HEX Colour");
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (colors.length < 16) {
      addNewColour();
      setNewColor("");
    } else {
      setError("palette can only contain 16 colors");
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="addColorForm">
        <span className="spanText">Add color to pallete using #HEX</span>
        <div className="wrapper">
          <input
            className="editInput"
            value={newColor}
            type="text"
            maxLength={7}
            placeholder="#000000"
            onChange={onChange}
          />
          <button className="editAddButton" type="submit">
            +
          </button>
        </div>
        <p className="error">{error}</p>
      </form>
    </div>
  );
};

export default AddColor;
