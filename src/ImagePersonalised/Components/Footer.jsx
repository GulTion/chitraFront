import React from "react"
import I from "./Icons/"


const Footing = ({heading})=>{
    return <div className="_Footing">{heading}</div>
}

const Buttons = ({onDiscard, onSave})=>{
    return <div className="d-flex flex-row _Buttons">
        <div className="_Discard">Dicard</div>
        <div className="d-flex flex-row align-items-center _Save">
            Save<img src={I.save} alt={"Save"} />
        </div>
    </div>
}

export default function Footer(){
    return <div className="d-flex flex-row justify-content-between align-items-center _Footer">
        <Footing heading={"Total number of merge tags used in this image: 4"}/>
        <Buttons onDiscard={()=>{}} onSave={()=>{}}/>
    </div>
}