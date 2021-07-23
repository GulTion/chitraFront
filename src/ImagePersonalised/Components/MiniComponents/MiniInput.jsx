import React, { useState } from "react"
import I from "../Icons/"

export default function MiniInput({value,label, min, max, type, width, setValue, onChange}) {
   
    return (
        <div className="d-flex flex-column _MiniInput">
            {label}
            <div className="d-flex flex-row _InputFrame" style={{width:width?width:"5.208vw"}}>
            <input value={value} type={type||"number"}  min={min} max={max} className="_Input" onChange={e=>onChange(e.target.value)}/>
            <div className="d-flex flex-column justify-content-center align-items-center _UpDownButtons">
                <img src={I.down1} alt="" onClick={()=>onChange(value-1)}/>
                <img src={I.down1} alt="" className="_Down"  onClick={()=>onChange(Number(value)+1)}/>
            </div>
            </div>
          
        </div>
    )
}