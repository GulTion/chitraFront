import React from "react";
import uuid from "uuid-random";
import { fabric } from "fabric";
import { pushChange, saveChitr } from "../../api";
import I from "../ico/";
import { useState } from "react";
import { useRef } from "react";

const did = window.location.href.split("/").pop();
const shapeAdd = {
  addMain: (shape) => {
    let { canvas } = document;
    pushChange(did, { ...shape.toJSON(["id"]), cmd: "add" });
    canvas.add(shape);
    canvas.renderAll();
  },
  addRect: function () {
    let { canvas } = document;
    let rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 100,
      height: 100,
      fill: "red",
      id: uuid(),
      padding:3,
      strokeWidth:3
      
    });
    this.addMain(rect);
  },

  addCircle: function () {
    let { canvas } = document;
    let circ = new fabric.Circle({
      top: 100,
      left: 100,
      radius: 50,
      fill: "blue",
      id: uuid(),
      strokeWidth:3
    });
    this.addMain(circ);
  },
  addText: function () {
    let text = new fabric.IText("Enter Text", {
      top: 100,
      left: 100,
      id: uuid(),
    });
    text.on("changed", (e) => {
      let id = text.id;
      pushChange(did, { text: text.text, id, cmd: "text" });
    });
    this.addMain(text);
  },
  addDraw: function ({ setDraw }) {
    let { canvas } = document;
    setDraw((k) => !k);
    canvas.isDrawingMode = !canvas.isDrawingMode;



  },
  delete: function () {
    let { canvas } = document;
    let now = canvas.getActiveObject();
    if (now) {
      pushChange(did, { id: now.id, cmd: "delete" });
      canvas.remove(now);
    }else{
      canvas.getObjects().forEach(e=>{
        canvas.remove(e)
      })
    }
    canvas.renderAll();
  },
  colorChange:function(e) {
    
    let { canvas } = document;
    if (canvas) {
      let now = canvas.getActiveObject();
      if (now) {
        now.set({ fill: e.target.value });

        pushChange(did, {
          id: now.id,
          fill: e.target.value,
          cmd: "modified",
        });
      } else {
        canvas.set({ backgroundColor: e.target.value });
        pushChange(did, {
          fill: e.target.value,
          cmd: "changeCanvasColor",
        });
      }
      canvas.renderAll();
    }
  
  }
};

const LineSizeTab = ({onChange})=>{
  const [now ,setNow] = useState([1,2,5,7].findIndex(e=>e==document.canvas.freeDrawingBrush.width))
  return <div className="__Tab">
      {[1,2,5,7].map((e,i)=>{
          return <div onClick={()=>{
            setNow(i);
            onChange(i)
            document.canvas.freeDrawingBrush.width = e
          }} className={`_Tab ${now===i&&"_Tab_Active"}`}>{e}</div>
      })}
  </div>
}

function ToolBar({ isAuth, isValid }) {
  const [isDraw, setDraw] = useState(false);
  const colorRef = useRef();
  return (
    <div className="ToolBar" >
      <div className="Tab" onClick={() => shapeAdd.addRect()}>
        <img src={I.Rect} />
      </div>
      <div className="Tab" onClick={() => shapeAdd.addCircle()}>
        <img src={I.Circle} />
      </div>
      <div className="Tab" onClick={() => shapeAdd.addText()}>
        <img src={I.Text} />
      </div>
      <div
        className="Tab"
        onClick={() => shapeAdd.addDraw({ setDraw: (e) => setDraw(e) })}
      >
        <img src={!isDraw ? I.Pencil : I.Cursor} />

      </div>
    {isDraw&&<LineSizeTab onChange={()=>{}}/>}
      <div
        className="Tab"
        onClick={() => shapeAdd.delete({ setDraw: (e) => setDraw(e) })}
      >
        <img src={I.Remove} />
      </div>
      
      <div
        className="Tab"
        onClick={() => {
          colorRef.current.click();
        }}
      >
        <img src={I.Fill} />
        <input
          ref={colorRef}
          style={{ width: "0px", height: "0px", border: "0px", opacity: "0" }}
          type="color"
          onChange={shapeAdd.colorChange}
        />
      </div>
 
        <div
          className="Tab"
          onClick={() => {
            saveChitr({ drawingId: did, json: document.canvas.toJSON(["id"]) });
          }}
        >
          <img src={I.Save} />
        </div>
    

      <div
        className="Tab"
        onClick={function () {
          let a = document.createElement("a");
          a.href = document.canvas.toDataURL({
            format: "jpeg",
            quality: 1.0,
          });
          a.download = "canvas.png";
          a.click();
        }}
      >
        <img src={I.Download} />
      </div>

      <div
        className="Tab"
        onClick={() => {
          const el = document.createElement("textarea");
          el.value = document.location.href;
          document.body.appendChild(el);
          el.select();
          document.execCommand("copy");

          document.body.removeChild(el);
          alert(`URL is Copied in Clipboard , paste to share to anybody !`);
        }}
      >
        <img src={I.Share} />
      </div>
    </div>
  );
}

export default ToolBar;
