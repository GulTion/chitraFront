import React from "react"
import { useState } from "react"

export default function FrameInput({label,type}){
    const [who, setWho] = useState(0);
    return (<div className="_FrameInput">
            {label}
            <div className="d-flex flex-row _InputWrap">
                {[0,1].map((e)=>{
                    return (<div className={`_OuterShape ${who===e?"_OuterShapeActive":""}`} onClick={()=>setWho(e)}>
                        <div className={`_InnerShape`} style={{borderRadius:e===0?"0%":"50%"}}></div>
                    </div>)
                })}
            </div>
    </div>)
}