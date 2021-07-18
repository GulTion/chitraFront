import React from "react"
import ChangeImage  from "./MiniComponents/ChangeImage"
import LinkUnlink from "./MiniComponents/LinkUnlink"
import MiniInput from "./MiniComponents/MiniInput"
import FrameInput from "./MiniComponents/FrameInput"
import SliderInput from "./MiniComponents/SliderInput"

export default function ImageSettings(){
    return (
        <div className="_ImageSettings">
            <ChangeImage />
            <div className="d-flex flex-row justify-content-between _WidthHeight">
                <div className="d-flex flex-row ">
                    <MiniInput value={0} label="Height:"/>
                    <LinkUnlink />
                    <MiniInput value={0} label="Width:"/>
                </div>
                <FrameInput label="Frame"/>
            </div>
            <SliderInput max={10} min={-10} value={4}/>
        </div>
    )
}