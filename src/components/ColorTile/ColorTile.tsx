import React from "react";
import { Color } from "../../constants";
import "./ColorTile.scss";

type Props = {
  color: Color;
  index: number;
  deleteColor: (index: number) => void;
};

class ColorTile extends React.Component<Props> {
  render() {
    const { color, index, deleteColor } = this.props;
    return (
      <div
        className="tileContainer"
        style={{ "--bg-color": color.RGB } as React.CSSProperties}
      >
        <div className="colorDiv">
          {color.isDefault ? (
            ""
          ) : (
            <button className="deleteButton" onClick={() => deleteColor(index)}>
              x
            </button>
          )}
        </div>
        <p className="tileText">{color.HEX}</p>
      </div>
    );
  }
}

export default ColorTile;
