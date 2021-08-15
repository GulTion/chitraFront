
import { fabric } from "fabric";
import "./index.css"
import React, {useRef, useEffect} from "react"
import uuid from "uuid-random"
import {pushChange,pullChange,subscribeForFabric} from "../../api"
import ToolBar from "./ToolBar";
const {log} = console

const did = window.location.href.split("/").pop()

function NewCanvas(){
    let _width = document.body.clientWidth
    let _height = document.body.clientHeight
    let height =()=> _width>_height?_height:_width/1.7777777;
    let width =()=> _width>_height?_height*1.77777777:_width;
    const cvs = useRef();
    
    useEffect(()=>{
        let canvas = new fabric.Canvas(cvs.current,{
            // width:width()*0.9,
            // height:height()*0.9
            width:640,
            height:640/1.7777,
            backgroundColor:"white"
        });

        subscribeForFabric(did, ()=>{})

        canvas.on("object:modified",(e)=>{
            pushChange(did, {...e.target.toJSON(['id']), cmd:"modified"})
        })

        canvas.on("object:moving", (e)=>{
            let {top, left, id} = e.target.toJSON(['id'])
            pushChange(did, { id, top,left, cmd:"modified"})
        })
        canvas.on("object:scaling", (e)=>{
            let {scaleX, scaleY,top,left ,id} = e.target.toJSON(['id'])
            pushChange(did, { scaleX,top,left, scaleY,id, cmd:"modified"})
        })
        canvas.on("object:rotating", (e)=>{
            let {angle,top, left ,id} = e.target.toJSON(['id'])
            pushChange(did, { angle,id,top, left, cmd:"modified"})
        })
        canvas.on("path:created", (e)=>{
            e.path.set({id:uuid()})
            log(e.path)            
            pushChange(did, { ...e.path.toJSON(['id']),cmd:"add"})
        })


        pullChange(did, (get)=>{
            log(get)

            if(get.cmd==="add"){
                if(get.type=="rect"){
                canvas.add(new fabric.Rect(get))
                }
                else if(get.type==="circle"){
                    canvas.add(new fabric.Circle(get))
                }
                else if(get.type==="i-text"){
                    canvas.add(new fabric.IText(get.text,get))
                }
                else if(get.type==="path"){
                    canvas.add(new fabric.Path(get.path, get))
                }
            }
            else if(get.cmd==="modified"){
                canvas._objects.forEach(e=>{
                    if(e.id==get.id){
                        e.set(get)
                    }
                })
            }
            else if(get.cmd==="text"){
                canvas._objects.forEach(e=>{
                    if(e.id==get.id){
                        e.set({text:get.text})
                    }
                })
            }
            else if(get.cmd==="delete"){
                canvas._objects.forEach(e=>{
                    if(e.id==get.id){
                        canvas.remove(e)
                    }
                })
            }
            canvas.renderAll()
            
        })


 
       
        document.canvas = canvas

        // let _text = new fabric.IText("Here is Tex", {top:100, left:100, width:100})
        // let _box = new fabric.Rect({top:100, left:100, width:100,height:50, fill:"grey"})
        // let _group = new fabric.Group([_text, _box], {top:200, left:200});
        // canvas.add(_group)
        // canvas.renderAll()

        // window.onload = window.onresize=()=>{
        // _width = document.body.clientWidth
        //  _height = document.body.clientHeight
        //  height =()=> _width>_height?_height:_width/1.7777777;
        //  width =()=> _width>_height?_height*1.77777777:_width;
        //     log({width:width(), height:height()})
        //     canvas.setDimensions({width:width()*0.9, height:height()*0.9})
        //     canvas.renderAll()
        // }




       

        log(canvas)
    },[])
    return <div className="NewCanvas" >
       <ToolBar />
        <canvas  id="_newCanvas" ref={cvs}></canvas>
    </div>
}

export default NewCanvas;