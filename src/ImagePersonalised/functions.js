import React from "react"
import { fabric } from "fabric";
import Store from "./store";
import uuid from "uuid-random"
import TextSettings from "./Components/TextSettings"
import I from "./Components/Icons/"

const {log} = console;

export default function abc(){}

export function addTextToCanvas({addTextToObjectList,openObjectOnSelect }){
    const id = uuid();
    const {canvas} = document._
    let Text = document.createElement("div");
    Text.style.position="fixed"
    Text.style.display ="none"
    
    Text.className="_ObjectLabel"
    Text.innerHTML = "Text"
    document.body.appendChild(Text)
    let IText = new fabric.IText("Enter Heading\nHere", {
        fontFamily:"Poppins",
        ...document._.selectionSettings
    })

    IText.setControlsVisibility({
      mt:false,
      ml:false,
      mr:false,
      mb:false
    })
    
    IText.id = id;
    addTextToObjectList({type:"ADD_TEXT_OBJECT", data:{
        element:<TextSettings />,
        icon:I.text,
        isOpen:false,
        id,
        title:'Untitled text 1',
        unique:false
    }})

    // log(Store().getState())

 
    IText.on("selected", ()=>{
        Text.style.display = "block";
        log('working')
        let p = document._[id]?.(Number(IText.scaleY*40).toFixed(2))
        openObjectOnSelect({id, select:true})
        
    })
    IText.on("deselected", ()=>{
        Text.style.display = "none"
        openObjectOnSelect({id,select:false})
    })
    IText.on("selection:cleared", ()=>{
        Text.style.display = "none"
    })

    IText.on("added", ()=>{
        let {left, top} = canvas.getAbsoluteCoords(IText);
        Text.style.left =left+5+"px";
        Text.style.top = top-Text.getBoundingClientRect().height   +"px";
    })

    canvas.on('object:scaling', (e)=>{
           document._[id](Number(e.target.scaleY*40).toFixed(2))
    })

    // IText.on("rotating", (e)=>{
    //         const {angle, aCoords:{tl:{x,y}}} = e.transform.target;
    //         Text.style.transform = `rotateZ(${angle}deg)`;
    //         Text.style.left = x- canvas._offset.left+5+"px";
    //         Text.style.top =   y- canvas._offset.top  +"px";
    //         console.log(e);
    // })

    IText.on("moving", ()=>{
        let {left, top} = canvas.getAbsoluteCoords(IText);
        Text.style.left =left+5+"px";
        Text.style.top = top-Text.getBoundingClientRect().height   +"px";
    })
    IText.on("")
    canvas.add(IText);
}

export function textFormating(style, family){
    const {canvas} = document._;
    let now = canvas.getActiveObject();
    now.set({
        [style]:!now[style],
        [family]:style

    })
    canvas.renderAll()
}