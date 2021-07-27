import React from "react"
import { useState } from "react"

export default function FrameInput({label,type,frame, object}){

    const [who, setWho] = useState(frame._type==undefined?0:frame._type);
    return (<div className="_FrameInput">
            {label}
            <div className="d-flex flex-row _InputWrap">
                {[0,1].map((e)=>{
                    return (<div className={`_OuterShape ${who===e?"_OuterShapeActive":""}`} onClick={()=>{
                        if(who===0){
                            frame.set({visible:true,top:object.top, left:object.left});
                            document._.canvas.setActiveObject(frame);
                            document._.canvas.renderAll();
                            frame._type = 1
                            
                        }
                        setWho(e)}}>
                        <div className={`_InnerShape`} style={{borderRadius:e===0?"0%":"50%"}} onClick={e=>{
                            if(who===0){

                            }
                            if(who===1){
                                frame.set({visible:true,top:object.top, right:object.right});
                                document._.canvas.setActiveObject(frame);
                                document._.canvas.renderAll()
                                
                            }
                        }}></div>
                    </div>)
                })}
            </div>
    </div>)
}