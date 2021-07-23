import React from "react"
import ChangeImage  from "./MiniComponents/ChangeImage"
import LinkUnlink from "./MiniComponents/LinkUnlink"
import MiniInput from "./MiniComponents/MiniInput"
import FrameInput from "./MiniComponents/FrameInput"
import SliderInput from "./MiniComponents/SliderInput"
import InputColor from "react-input-color"
import InputSlider from "react-input-slider"

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
            <SliderInput label="SkewX" value={2} max={5} min={-5} step={0.1}/>
            <SliderInput label="SkewY" value={2} max={5} min={-5} step={0.1}/>
          
        </div>
    )
}