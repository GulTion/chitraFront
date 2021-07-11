import Excalidraw, {
    exportToCanvas,
    exportToSvg,
    exportToBlob
  } from "@excalidraw/excalidraw";

  import React,{useRef, useState} from "react"
import { useEffect } from "react";
import axios from "axios"
import URL from "../URL"

const {log} = console;

export default function ExcaliDraw({drawingId}){
    const excalidrawRef = useRef(null);

    const [viewModeEnabled, setViewModeEnabled] = useState(false);
    const [zenModeEnabled, setZenModeEnabled] = useState(false);
    const [gridModeEnabled, setGridModeEnabled] = useState(false);
    const [blobUrl, setBlobUrl] = useState(null);
    const [canvasUrl, setCanvasUrl] = useState(null);
    const [exportWithDarkMode, setExportWithDarkMode] = useState(false);
    const [shouldAddWatermark, setShouldAddWatermark] = useState(false);
    const [theme, setTheme] = useState("light");
    const [drawingName, setName] = useState("")
    const onObjectChange=(b, n)=>{
      // b: Before Element Arr
      // n: After Element Arr
      let changes = {}
     
      

    }

    let initArr = []
  useEffect(()=>{
    const id = window.location.href.split("/").pop();
    log(id)
    axios.post(`${URL}/drawing/get`, {id}).then(e=>{
      const {data} = e;
      log({data})
      if(data.success){
          setName(data.name)
          // log(data)
          document.title = `${data.name} - Chitr`
      }else{
          setName("NOT FOUND")
      }
  })
  },[])

    return(
        <>
        <h1>{drawingName}</h1>
        <Excalidraw 
        
        ref={excalidrawRef}
        initialData={[]}
        // onChange={(ele,state)=>onChange(initArr,ele)}
        // onPointerUpdate={(payload) => console.log(payload)}
        onCollabButtonClick={() =>
          window.alert("You clicked on collab button")
        
        }
        onPointerUpdate={(pay)=>{
          log(pay)
        }}
        viewModeEnabled={viewModeEnabled}
        zenModeEnabled={zenModeEnabled}
        gridModeEnabled={gridModeEnabled}
        theme={theme}
        name="Custom name of drawing"
        UIOptions={{ canvasActions: { loadScene: false } }}
        />
        </>
    )
}