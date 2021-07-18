import React from "react"
import ObjectTab from "./ObjectTab"
import I from "./Icons/"
import ArtBoardSettings from "./ArtBoardSettings"

const Canvas = () =>{
    return <div className="_Canvas"></div>
}
const ObjectList = ()=>{
    return <div className="_ObjectList">
        <ObjectTab icon={I.artboard} title="Artboard Settings">
            <ArtBoardSettings />
        </ObjectTab>
        <ObjectTab icon={I.artboard} title="Artboard Settings">
            <h1>abc</h1>
        </ObjectTab>
    </div>
}

export default function Main({}){
    return <div className="d-flex flex-row justify-content-between _Main">
        <Canvas />
        <ObjectList/>
    </div>
}