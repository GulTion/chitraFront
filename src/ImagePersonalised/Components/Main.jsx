import React from "react"
import ObjectTab from "./ObjectTab"
import I from "./Icons/"
import ArtBoardSettings from "./ArtBoardSettings"
import ImageSettings from "./ImageSettings"
import Canvas from "./Canvas"

const ObjectList = ()=>{
    return <div className="_ObjectList">
        <ObjectTab icon={I.image} title="Image Settings">
           <ImageSettings />
        </ObjectTab>
        <ObjectTab icon={I.artboard} title="Artboard Settings">
            <ArtBoardSettings />
        </ObjectTab>
        
    </div>
}

export default function Main(){
    return <div className="d-flex flex-row justify-content-between _Main">
        <Canvas />
        <ObjectList/>
    </div>
}