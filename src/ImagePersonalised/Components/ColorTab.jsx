import React, { useState, useRef } from "react";
import I from "./Icons/";
import { connect } from "react-redux";
import { CANVAS_COLOR_CHOOSE } from "../actions";
import { useEffect } from "react";

// import { log } from "fabric/fabric-impl";
const { log } = console;
function ColorTab(props) {
  const [index, setIndex] = useState(props.type === "image" ? -1 : props.index);
  const [colors, setColors] = useState([
    "#ffffff",
    "#f5cb5c",
    "#f79d84",
    "#4c5454",
    "#eae4e9",
    "#c9184a",
    "#5a189a",
  ]);
  useEffect(() => {
    console.log({ props });
  }, []);
  const colorRef = useRef();

  return (
    <div className="_ColorTab">
      <div
        className="d-flex flow-row justify-content-center align-items-center _Color _Custom_Color"
        onClick={(e) => {
          colorRef.current.click();
          //   colorRef.current.addEve
        }}
      >
        <img src={I.add} alt="add" />
        <input
          type="color"
          style={{ position: "absolute", opacity: 0 }}
          ref={colorRef}
          //   onBlur={(c) => {
          //     setColors((col) => {
          //       return [c.target.value, ...col];
          //     });
          // log(c.target.value);
          //   }}
        />
      </div>
      {colors.map((color, i) => {
        return (
          <div
            key={`${color}_${i}`}
            className={`_Color ${
              props.type === "image"
                ? -1
                : props.index === i
                ? "_Color_Selected"
                : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() =>
              props.chooseColor({
                type: "color",
                value: color,
                index: i,
                name: color,
              })
            }
            // onClick={()=>handleColorChange({index:i, value:color, type:"color"})}
          ></div>
        );
      })}
    </div>
  );
}

export default ColorTab;
