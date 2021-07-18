import React from "react"
import { useState } from "react"

export default function SliderInput({label, max, min, value}) {
    const [val, setVal] = useState(value);

    return(<div className={`_SliderInput `}>
        {label}
        <div className="d-flex flex-row justify-content-between align-items-center _Input">
            <input min={min} max={max} type="range" className="_Range" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <input min={min} max={max} type="number" className="_Number" value={val} onChange={(e)=>setVal(e.target.value)}/>
        </div>
    </div>)
}