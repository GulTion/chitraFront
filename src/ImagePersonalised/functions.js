import React, { useState } from "react"
import ReactDOM from "react-dom"
import { fabric } from "fabric";
import Store from "./store";
import uuid from "uuid-random"
import TextSettings from "./Components/TextSettings"
import I from "./Components/Icons/"
import TextControl from "./Components/MiniComponents/TextControl"

import {store} from "../index"
const {log} = console;

export default function abc(){}


  

export function addImageToCanvas(id){
    let info = {
        rect:{strokeWidth:1.5},
        lines:{strokeWidth:0.5}
    }
    
    const rect = new fabric.Rect({
        width:100,
        height: 100,
        fill:"",
        // borderColor:"#e72870",
        // backgroundColor:"rgba(0,0,0,0.1)",
        stroke:"#e72870",
        strokeWidth:info.rect.strokeWidth
        
    })
    let _lines = [
        [33,0,33,100],
        [66,0,66,100],
        [0,33,100,33],
        [0,66,100,66]
    ]
    let lines = _lines.map(e=>new fabric.Line(e,{
        stroke:"#e72870",
        strokeWidth:info.lines.strokeWidth
    }))
 


    let text = document.createElement("div");
    // const id = uuid();
    const {canvas} = document._
    text.style.position="fixed"
    text.style.display ="none"
    
    text.className="_ObjectLabel"
    text.innerHTML = "Image"
    document.body.appendChild(text);
    // ReactDOM.render(TextControl, document.getElementById('root'));
    let _img =new window.Image()
    _img.onload = e=>{
        canvas.renderAll()
    }
    _img.src=I.imageDefault;
    let object = new fabric.Image(_img, {
        ...document._.selectionSettings,
        width:970,
        height:513,
        scaleX:0.3,
        scaleY:0.3
    },e=>{
        // log(e)
    })

    let cropFrame = new fabric.Group([rect, ...lines],{
        ...document._.selectionSettings,
        cornerSize:10,
        hasBorders:false,
        top:object.top,
        left:object.left
    })
    // canvas.sendToBack(object);
  


    object.setControlsVisibility({
 
    })

    function moverControl(display){
        let control = document.querySelector(`#_${id}-imageControl`)
        // log(control)
      let {left, top} = canvas.getAbsoluteCoords(object);
      let realHeight = object.height*object.scaleY;
      text.style.display = display||'block';
      text.style.left =left+5+"px";
      text.style.top = top-text.getBoundingClientRect().height   +"px";
        
    control.style.display = display||'flex';
    control.style.left =left+"px";
    
    const {angle}=object;
    let _angle = (angle>=180?(360-angle):angle)
    let _topObject = 10+top+realHeight+Math.sin(_angle*Math.PI/180)*object.width+"px";
    // log(_topObject)
    control.style.top = _topObject
    }

    object.on("selected",()=>{
        store.dispatch({type:"OBJECT_LIST_CLOSE",data:{id,select:false, isOpen:true}})
        moverControl();
    })
    object.on('moving',()=>{
        moverControl()
    })
    object.on('scaling',()=>{ 
        moverControl()
    })
    object.on('deselected',()=>{
        text.style.display="none"
        store.dispatch({
            type:"CHOOSE_IMAGE_ACTIVATE",
            data:false
        })
        store.dispatch({type:"OBJECT_LIST_CLOSE",data:{id,select:false, isOpen:false}});

    })

  
    // setTimeout(()=>{
    //     canvas.renderAll()
    // },500)










cropFrame.setControlsVisibility({
    mtr:false
})
cropFrame.on("scaling", (e)=>{
    rect.set({
        scaleX:rect.scaleX?rect.scaleX:2,
        scaleY:rect.scaleY<3?rect.scaleY:3,
        strokeWidth:Math.min(info.rect.strokeWidth/cropFrame.scaleX,info.rect.strokeWidth/cropFrame.scaleY)
    })

    lines.forEach(e=>{
        e.set({
            strokeWidth:Math.min(info.lines.strokeWidth/cropFrame.scaleX,info.lines.strokeWidth/cropFrame.scaleY)
        })
    })
    canvas.renderAll()
})





canvas.add(object);
canvas.renderAll()
canvas.setActiveObject(cropFrame);
// canvas.on('object:moving', null);

    return {object:object, text:text}
}

let text = document.createElement("div");


export function addTextToCanvas(id){

    // const [render, setRender] = useState(uuid())

    // const id = uuid();
    const {canvas} = document._
    
    text.style.position="fixed"
    text.style.display ="none"
    
    text.className="_ObjectLabel"
    text.innerHTML = "text"
    document.body.appendChild(text)
    let object = new fabric.IText("Enter Heading\nHere", {
        fontFamily:"Poppins",
        ...document._.selectionSettings
    })

    object.setControlsVisibility({
      mt:false,
      ml:false,
      mr:false,
      mb:false
    })
    
    object.id = id;

 
    object.on("selection:cleared", ()=>{
        text.style.display = "none"
    })

    object.on("added", ()=>{
        let {left, top} = canvas.getAbsoluteCoords(object);
        text.style.left =left+5+"px";
        text.style.top = top-text.getBoundingClientRect().height   +"px";
    })


    
    let _
    function moverControl(display){
        let control = document.querySelector(`#_${id}-textControl`)
        // log(control)
      let {left, top} = canvas.getAbsoluteCoords(object);
      let realHeight = object.height*object.scaleY;
      text.style.display = display||'block';
      text.style.left =left+5+"px";
      text.style.top = top-text.getBoundingClientRect().height   +"px";

    control.style.display = display||'flex';
    control.style.left =left+"px";
    
    const {angle}=object;
    let _angle = (angle>=180?(360-angle):angle)
    let _topObject = 10+top+realHeight+Math.sin(_angle*Math.PI/180)*object.width+"px";
    // log(_topObject)
    control.style.top = _topObject
    }


   _= object?.on('rotating', (e)=>{
      moverControl()
    })

   _= object?.on("moving", ()=>{
      moverControl()
  })

 _= object?.on("scaling", ()=>{
  moverControl()
})


   _= object?.on("selected", ()=>{
    store.dispatch({type:"OBJECT_LIST_CLOSE",data:{id,select:false, isOpen:true}})
     moverControl();
    
})


  _=  object?.on("deselected", ()=>{
    let control = document.querySelector(`#_${id}-textControl`)
    text.style.display = "none"
    control.style.display="none"
    store.dispatch({type:"OBJECT_LIST_CLOSE",data:{id,select:false, isOpen:false}})

})
    

    

    

    canvas.add(object);

    return {object:object, text:text}
}



