import React from "react"
import MiniInput from "./MiniComponents/MiniInput";
import MiniToggle from "./MiniComponents/MiniToggle";
import I from "./Icons/"
// import { textFormating } from "../functions";
import {useState} from "react";
import uuid from "uuid-random"
import { useEffect } from "react";
import { useRef } from "react";
import SliderInput from "./MiniComponents/SliderInput";

 function textFormating(style, family,object){
    const {canvas} = document._;
    let now = canvas.getActiveObject();
    now.set({
        [style]:!now[style],
        [family]:style

    })
    canvas.renderAll()
}

function TextSettings(props){
    const ref1 = useRef()
    const [align, setAlign]=  useState('left');
    const [fontSize, setSize] = useState(Number(props.object.get('scaleX')*40).toFixed(1));
    const [_, set_] = useState(uuid());
    const [type, setType] = useState('')
    const [color, setColor] = useState('#f0f0f0')

    const __ = cb=>{
        cb();
        set_(uuid())
    }
    useEffect(()=>{
        props.object.on('scaling',e=>{
            setSize(Number(props.object.get('scaleX')*40).toFixed(1));
        })

    },[])
 

    // useEffect(()=>{
    //     setSize(props.object._fontSize)
    // },[props.object._fontSize])

    return <div className="_TextSettings">
        <div>
        <div className="d-flex flex-row justify-content-between _FontSizeFamily">
            <MiniInput label="Font family" width="100%" type={"text"} value={"Poppins"}/>
            <MiniInput label="Font size"  value={fontSize} onChange={e=>{
                setSize(e)
                props.object.set({scaleX:e/40, scaleY:e/40})
                document._.canvas.renderAll()
            }} type="number"/>
        </div>
        <div className="d-flex flex-row justify-content-between _FontButtons">
            <div className="d-flex flex-row justify-content-start _AlignFontButtons">
                <MiniToggle activeIcon={I.leftAlignActive} normalIcon={I.leftAlignWhite} toggle={align==='left'} onToggle={(e)=>{textFormating('left', 'textAlign'); setAlign('left')}}/>
                <MiniToggle activeIcon={I.centerAlignActive} normalIcon={I.centerAlignWhite} toggle={align==='center'} onToggle={()=>{textFormating('center', 'textAlign'); setAlign('center')}}/>
                <MiniToggle activeIcon={I.rightAlignActive} normalIcon={I.rightAlignWhite} toggle={align==='right'} onToggle={()=>{textFormating('right', 'textAlign'); setAlign('right')}}/>

            </div>
            <div className="d-flex flex-row justify-content-end _StyleFontButtons">
                <MiniToggle activeIcon={I.boldTextActive} normalIcon={I.boldTextWhite} toggle={props.object?.fontWeight==='bold'} onToggle={(e)=>{__(()=>textFormating(e?'bold':'normal', 'fontWeight'))}}/>
                <MiniToggle activeIcon={I.italicTextActive} normalIcon={I.italicTextWhite} toggle={props.object?.['fontStyle']==='italic'} onToggle={(e)=>{__(()=>textFormating(e?'italic':'normal', 'fontStyle'))}}/>
                <MiniToggle activeIcon={I.underlineTextActive} normalIcon={I.underlineTextWhite} toggle={props.object?.['underline']} onToggle={()=>{__(()=>textFormating('underline'))}}/>
                <MiniToggle activeIcon={I.strikethroughTextActive} normalIcon={I.strikethroughTextWhite} toggle={props.object?.['linethrough']} onToggle={()=>{__(()=>textFormating('linethrough'))}}/>

            </div>

        </div>
        <div className="d-flex flex-row justify-content-start _FontButtons">
            <input type="color" style={{display:"none"}} ref={ref1} value={color} onChange={e=>{
                if(type==='fill'){
                    props.object.set({fill:e.target.value})
                    document._.canvas.renderAll()
                }else  if(type==='textBackgroundColor'){
                    props.object.set({textBackgroundColor:e.target.value})
                    document._.canvas.renderAll()
                }
                else  if(type==='stroke'){
                    props.object.set({stroke:e.target.value})
                    document._.canvas.renderAll()
                }

            }} />
                <MiniToggle activeIcon={I.fontColorActive} normalIcon={I.fontColorWhite} toggle={false} onToggle={()=>{
                    ref1.current.click();
                    setType('fill')     
                }}/>
                <MiniToggle activeIcon={I.textBackgroundActive} normalIcon={I.textBackgroundWhite} toggle={false} onToggle={()=>{
                    ref1.current.click();
                    setType('textBackgroundColor')
                }}/>
                <MiniToggle activeIcon={I.fontStrokeColorActive} normalIcon={I.fontStrokeColorWhite} toggle={false} onToggle={()=>{
                    ref1.current.click()
                    setType('stroke')
                }}/>
        </div>
                
        <SliderInput label="SkewX" value={props.object.get('skewX')} max={90} min={-90} step={.1} onChange={e=>{
            props.object.set({skewX:e})
            document._.canvas.renderAll()
        }}/>
            <SliderInput label="SkewY" value={props.object.get('skewY')} max={90} min={-90} step={.1} onChange={e=>{
            props.object.set({skewY:e})
            document._.canvas.renderAll()
        }}/>
        </div>
    </div>
}

export default TextSettings;