import React from "react";

export default function CurrentColor({ isColor, value, name }) {
  return (
    <div className="d-flex flex-row  _CurrentColor">
      <div
        className="_Color"
        style={
          isColor
            ? { backgroundColor: value }
            : { background: `url(${value})`, backgroundSize: "cover" }
        }
      ></div>
      <div className="d-flex flex-column justify-content-between _ColorDetails">
        <div className="__First">Currently Selected:</div>
        <div className="d-flex flex-row  __Second">
          <label>{name.toUpperCase()}</label> •{" "}
          <div className="__Third">{isColor ? " Color" : " Image"}</div>
        </div>
      </div>
    </div>
  );
}
