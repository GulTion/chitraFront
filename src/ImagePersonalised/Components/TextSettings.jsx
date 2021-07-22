import React from "react"
import MiniInput from "./MiniComponents/MiniInput";
import MiniToggle from "./MiniComponents/MiniToggle";
import I from "./Icons/"
import { textFormating } from "../functions";
import {useState} from "react";
import uuid from "uuid-random"
import { useEffect } from "react";

function TextSettings(props){
    const [align, setAlign]=  useState('left');
    const [fontSize, setSize] = useState(document._.canvas.getActiveObject().fontSize);
    const [_, set_] = useState(uuid());
    const __ = cb=>{
        cb();
        set_(uuid())
    }
    useEffect(()=>{
        document._[document._.canvas.getActiveObject().id] = px =>setSize(px);
    },[])

    return <div className="_TextSettings">
        <div>
        <div className="d-flex flex-row justify-content-between _FontSizeFamily">
            <MiniInput label="Font family" width="100%" type={"text"} value={"Poppins"}/>
            <MiniInput label="Font size"  value={fontSize}/>
        </div>
        <div className="d-flex flex-row justify-content-between _FontButtons">
            <div className="d-flex flex-row justify-content-start _AlignFontButtons">
                <MiniToggle activeIcon={I.leftAlignActive} normalIcon={I.leftAlignWhite} toggle={align==='left'} onToggle={(e)=>{textFormating('left', 'textAlign'); setAlign('left')}}/>
                <MiniToggle activeIcon={I.centerAlignActive} normalIcon={I.centerAlignWhite} toggle={align==='center'} onToggle={()=>{textFormating('center', 'textAlign'); setAlign('center')}}/>
                <MiniToggle activeIcon={I.rightAlignActive} normalIcon={I.rightAlignWhite} toggle={align==='right'} onToggle={()=>{textFormating('right', 'textAlign'); setAlign('right')}}/>

            </div>
            <div className="d-flex flex-row justify-content-end _StyleFontButtons">
                <MiniToggle activeIcon={I.boldTextActive} normalIcon={I.boldTextWhite} toggle={document._.canvas.getActiveObject()?.fontWeight==='bold'} onToggle={(e)=>{__(()=>textFormating(e?'bold':'normal', 'fontWeight'))}}/>
                <MiniToggle activeIcon={I.italicTextActive} normalIcon={I.italicTextWhite} toggle={document._.canvas.getActiveObject()?.['fontStyle']==='italic'} onToggle={(e)=>{__(()=>textFormating(e?'italic':'normal', 'fontStyle'))}}/>
                <MiniToggle activeIcon={I.underlineTextActive} normalIcon={I.underlineTextWhite} toggle={document._.canvas.getActiveObject()?.['underline']} onToggle={()=>{__(()=>textFormating('underline'))}}/>
                <MiniToggle activeIcon={I.strikethroughTextActive} normalIcon={I.strikethroughTextWhite} toggle={document._.canvas.getActiveObject()?.['linethrough']} onToggle={()=>{__(()=>textFormating('linethrough'))}}/>

            </div>

        </div>
        <div className="d-flex flex-row justify-content-start _FontButtons">
                <MiniToggle activeIcon={I.fontColorActive} normalIcon={I.fontColorWhite} toggle={false} onToggle={()=>{}}/>
                <MiniToggle activeIcon={I.textBackgroundActive} normalIcon={I.textBackgroundWhite} toggle={false} onToggle={()=>{}}/>
                <MiniToggle activeIcon={I.fontStrokeColorActive} normalIcon={I.fontStrokeColorWhite} toggle={false} onToggle={()=>{}}/>
        </div>

        </div>
    </div>
}

export default TextSettings;