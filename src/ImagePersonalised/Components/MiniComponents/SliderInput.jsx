import React from "react";
import { useState } from "react";
import InputSlider from "react-input-slider";

export default function SliderInput({ label, max, min, value,step, onChange=()=>{} }) {
  const [val, setVal] = useState(value);

  return (
    <div className={`_SliderInput `}>
      {label}
      <div className="d-flex flex-row justify-content-between align-items-center _Input">
        <InputSlider
          styles={{
            track: {
              backgroundColor: "#242424",
              height: "0.521vw",
              width:"80%"
            },
            active: {
              backgroundColor: "#242424",
            },
            thumb: {
              width: "1.094vw",
              height: "1.094vw",
              backgroundColor: "#e72870",
            },
            disabled: {
              opacity: 0.5,
            },
          }}

          onChange={({x})=>{setVal(x);
        onChange(x)
        }}
          x={val}
          xmax={max}
          xmin={min}
          xstep={step}
        />
        <input
          min={min}
          max={max}
          type="number"
          className="_Number"
          value={Number(val).toFixed(1)}
          onChange={(e) => {setVal(e.target.value);
            onChange(e.target.value)
        }}
        />
      </div>
    </div>
  );
}
