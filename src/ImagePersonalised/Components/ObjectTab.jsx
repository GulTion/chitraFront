import React,{useState} from "react"
import I from "./Icons/"

export default function ObjectTab({icon,title, ...props}) {
    const [isOpen, setOpen] = useState(props.isOpen)
    return <><div className={`d-flex flex-row justify-content-between align-items-center _ObjectTab ${isOpen?"_ObjectTab_Active":""}`}>
        <div className="_TabName">
                <img src={icon} alt={title} /> {title}
            </div>
        <div className="d-flex flex-row _TabButtons">
            <img src={!isOpen?I.lock:I.lock2} alt={"Lock"} />
            <img src={I.down} alt={"Down"} className={`${isOpen?"_Up":""}`} onClick={()=>setOpen(!isOpen)}/>
        </div>
    </div>
    <div className={`_ObjectData ${isOpen?"slide-in-top":"slide-out-top"}`} style={{display:isOpen?"block":""}} onAnimationEnd={(e)=>{
        if(!isOpen){
            e.target.style.display="none"
        }else{
            e.target.style.display="block"
        }
    }}>{props.children}</div>
    </>
}