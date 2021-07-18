import React,{useState} from "react"
import I from "./Icons/"

export default function ObjectTab({icon,title, ...props}) {
    const [isOpen, setOpen] = useState(!false)
    return <><div className={`d-flex flex-row justify-content-between align-items-center _ObjectTab ${isOpen?"_ObjectTab_Active":""}`}>
        <div className="_TabName">
                <img src={icon} alt={title} /> {title}
            </div>
        <div className="d-flex flex-row _TabButtons">
            <img src={!isOpen?I.lock:I.lock2} alt={"Lock"} />
            <img src={I.down} alt={"Down"} className={`${isOpen?"_Up":""}`} onClick={()=>setOpen(!isOpen)}/>
        </div>
    </div>
    {isOpen?<div className="_ObjectData">{props.children}</div>:null}
    </>
}