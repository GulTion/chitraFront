import React, { useState } from "react"
import I from "../Icons/"

export default function MiniInput({value,label, min, max}) {
    const [val, setVal] = useState(value);
    return (
        <div className="d-flex flex-column _MiniInput">
            {label}
            <div className="d-flex flex-row _InputFrame">
            <input value={val} type="number" min={min} max={max} className="_Input" />
            <div className="d-flex flex-column justify-content-center align-items-center _UpDownButtons">
                <img src={I.down1} alt="" onClick={()=>setVal(val-1)}/>
                <img src={I.down1} alt="" className="_Down"  onClick={()=>setVal(val+1)}/>
            </div>
            </div>
          
        </div>
    )
}