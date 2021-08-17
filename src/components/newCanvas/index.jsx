import { fabric } from "fabric";
import "./index.css";
import React, { useRef, useEffect } from "react";
import uuid from "uuid-random";
import { pushChange, pullChange, subscribeForFabric } from "../../api";
import ToolBar from "./ToolBar";
import axios from "axios";
import URL from "../../URL";
const { log } = console;

const did = window.location.href.split("/").pop();

function NewCanvas() {

  const cvs = useRef();



  useEffect(() => {
    const WH = ()=>{
      let realHeight = document.body.clientHeight - document.querySelector(".ToolBar").getBoundingClientRect().height;
      let realWidth = document.body.clientWidth;
      let newRatio = realWidth/realHeight
      log({realWidth,realHeight})
      if(1.77777777<newRatio){
        return {height:realHeight*0.9, width:realHeight*1.777777777*0.9}
      }else{
       return {height:realWidth/1.777777777*0.9, width:realWidth*0.9}
      }
    }
    let canvas = new fabric.Canvas(cvs.current, {
      width:WH().width,height:WH().height,
      backgroundColor: "white",
    });
    document.canvas = canvas;
    const ran = ()=>Math.floor(Math.random()*256)
    document.color = `rgb(${ran()},${ran()},${ran()})`
    cvs.current.style.border = `3px solid ${document.color}`
    subscribeForFabric(did, () => {});

    canvas.on("object:modified",(e)=>{
      const {id,type} = e.target.toJSON(['id'])
        pushChange(did, {id, selectable:true,stroke:type==="path"?"black":"", cmd:"modified"})
    })

    canvas.on("object:moving", (e) => {
      let { top, left, id } = e.target.toJSON(["id"]);
      pushChange(did, { id, top, left,selectable:false,stroke:document.color, cmd: "modified" });
    });
    canvas.on("object:scaling", (e) => {
      let { scaleX, scaleY, top, left, id } = e.target.toJSON(["id"]);
      pushChange(did, { scaleX, top, left, scaleY,selectable:false,stroke:document.color, id, cmd: "modified" });
    });
    canvas.on("object:rotating", (e) => {
      let { angle, top, left, id } = e.target.toJSON(["id"]);
      pushChange(did, { angle, id, top,selectable:false,stroke:document.color, left, cmd: "modified" });
    });
    canvas.on("path:created", (e) => {
      e.path.set({ id: uuid() });
      log(e.path);
      pushChange(did, { ...e.path.toJSON(["id"]), cmd: "add" });
    });
    // canvas.on("mouse:move", (e)=>{
    //   let {x, y} = e.pointer;
    //   log({x:x*canvas.getZoom(),y:y*canvas.getZoom()})
    // })

    pullChange(did, (get) => {
      log(get);

      if (get.cmd === "add") {
        if (get.type === "rect") {
          canvas.add(new fabric.Rect(get));
        } else if (get.type === "circle") {
          canvas.add(new fabric.Circle(get));
        } else if (get.type === "i-text") {
          canvas.add(new fabric.IText(get.text, get));
        } else if (get.type === "path") {
          canvas.add(new fabric.Path(get.path, get));
        }
      } else if (get.cmd === "modified") {
        canvas._objects.forEach((e) => {
          if (e.id === get.id) {
            
            e.set(get);
          }
        });
      } else if (get.cmd === "text") {
        canvas._objects.forEach((e) => {
          if (e.id === get.id) {
            e.set({ text: get.text });
          }
        });
      } else if (get.cmd === "delete") {
        canvas._objects.forEach((e) => {
          if (e.id === get.id) {
            canvas.remove(e);
          }
        });
      } else if (get.cmd === "changeCanvasColor") {
        canvas.set({ backgroundColor: get.fill });
      }
      else if(get.cmd==="zoom"){
        canvas.zoomToPoint(get.canvas.offset, get.canvas.zoom);
        canvas.viewportTransform = get.viewport
      }
      canvas.renderAll();
    });

    //zoom
    canvas.on("mouse:wheel", function (opt) {
      var delta = opt.e.deltaY;
      var zoom = canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
      var vpt = this.viewportTransform;
      if (zoom < 400 / 1000) {
        vpt[4] = 200 - (1000 * zoom) / 2;
        vpt[5] = 200 - (1000 * zoom) / 2;
      } else {
        if (vpt[4] >= 0) {
          vpt[4] = 0;
        } else if (vpt[4] < canvas.getWidth() - 1000 * zoom) {
          vpt[4] = canvas.getWidth() - 1000 * zoom;
        }
        if (vpt[5] >= 0) {
          vpt[5] = 0;
        } else if (vpt[5] < canvas.getHeight() - 1000 * zoom) {
          vpt[5] = canvas.getHeight() - 1000 * zoom;
        }
      }

      pushChange(did, {cmd:"zoom", canvas:{offset:{ x: opt.e.offsetX, y: opt.e.offsetY }, zoom},viewport:vpt})

    });

    //pan
    canvas.on("mouse:down", function (opt) {
      var evt = opt.e;
      if (evt.altKey === true) {
        this.isDragging = true;
        this.selection = false;
        this.lastPosX = evt.clientX;
        this.lastPosY = evt.clientY;
      }
    });
    canvas.on("mouse:move", function (opt) {
      if (this.isDragging) {
        var e = opt.e;
        var vpt = this.viewportTransform;
        vpt[4] += e.clientX - this.lastPosX;
        vpt[5] += e.clientY - this.lastPosY;
        this.requestRenderAll();
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
    });
    canvas.on("mouse:up", function (opt) {
      // on mouse up we want to recalculate new interaction
      // for all objects, so we call setViewportTransform
      this.setViewportTransform(this.viewportTransform);
      this.isDragging = false;
      this.selection = true;
    });

    // let _text = new fabric.IText("Here is Tex", {top:100, left:100, width:100})
    // let _box = new fabric.Rect({top:100, left:100, width:100,height:50, fill:"grey"})
    // let _group = new fabric.Group([_text, _box], {top:200, left:200});
    // canvas.add(_group)
    // canvas.renderAll()
   
    window.onload = window.onresize=()=>{
      canvas.setDimensions({height:WH().height, width:WH().width})
    }
  

    axios.post(`${URL}/drawing/get`, { id:did }).then((e) => {
        const {data} = e
        log(data)
        if (data.success) {
          
          document.title = `${data.name} - Chitr`;
        } else {
          document.title = "NOT FOUND DRAWING";
          document.querySelector(".NewCanvas").innerHTML = "<h1 style='margin:auto'>NOT FOUND DRAWING</h1>"
        }
      });
  }, []);
  return (
    <div className="NewCanvas">
      <ToolBar />
      <canvas id="_newCanvas" style={{border:`2px solid ${document.color}`,width:"100%", height:"100%"}} ref={cvs}></canvas>
    </div>
  );
}

export default NewCanvas;
