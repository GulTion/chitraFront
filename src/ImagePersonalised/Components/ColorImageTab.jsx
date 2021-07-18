import React,{useState} from "react"
import I from "./Icons/"
import ColorTab from "./ColorTab";
import ImageTab from "./ImageTab";

function OneTab({text, icon,activeIcon, isActive, onClick,isSeleted}){
    return (<div className={`d-flex justify-content-center align-items-center _OneTab ${isActive?"_OneTabActive":""}`} onClick={onClick}>
        {isSeleted?<img src={isActive?I.colorCheck:I.greyCheck} alt={"check"} className="_CheckIcon"/>:null}
        {isActive?<div className={"_TabColorLine"}></div>:null}
        <div className={`_Text ${isActive?"_Text_active":""}`}>{text}</div> <img src={isActive?activeIcon:icon} alt={text} className="_Icon"/>
    </div>)
}

export default function ColorImageTab() {
    const [active,setActive] = useState(0);
    const TabIndex = {
        0:<ColorTab />,
        1:<ImageTab />
    }

    return (<div className="_ColorImageTab">
        <div className="d-flex _Tab">
            <OneTab isSeleted={true} text="Color" icon={I.whiteDrop} activeIcon={I.colorDrop} isActive={active===0} onClick={()=>setActive(0)}></OneTab>
            <OneTab text="Image" icon={I.whiteImage} activeIcon={I.colorImage} isActive={active===1} onClick={()=>setActive(1)}></OneTab>
        </div>
        <div className="_TabContent">
           {TabIndex[active]}
        </div>
    </div>)
}