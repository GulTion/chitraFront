import React from "react"
import I from "../Icons/"

export default function ChangeImage(){
    return (<div className="d-flex flex-row _ChangeImage">
        <img src={I.dummy} alt={"changeImage"} className="_Img"/>
        <div className="d-flex flex-row justify-content-center align-items-center _ChangeButtonFrame">
            <div className="d-flex flex-row _ChangeButton">Change Image <img src={I.refresh} alt={"RefreshIcon"} /></div>
            
        </div>
    </div>)
}