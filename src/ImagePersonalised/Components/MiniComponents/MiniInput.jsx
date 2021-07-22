import React, { useState } from "react"
import I from "../Icons/"

export default function MiniInput({value,label, min, max, type, width, setValue, onChange}) {
    let setvalue = (e)=>setValue(e)
    return (
        <div className="d-flex flex-column _MiniInput">
            {label}
            <div className="d-flex flex-row _InputFrame" style={{width:width?width:"5.208vw"}}>
            <input value={value} type={type||"number"}  min={min} max={max} className="_Input" onChange={onChange}/>
            <div className="d-flex flex-column justify-content-center align-items-center _UpDownButtons">
                <img src={I.down1} alt="" onClick={()=>setValue(value-1)}/>
                <img src={I.down1} alt="" className="_Down"  onClick={()=>setvalue(value+1)}/>
            </div>
            </div>
          
        </div>
    )
}