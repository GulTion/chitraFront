import React from "react"

const Canvas = () =>{
    return <div className="_Canvas"></div>
}
const ObjectList = ()=>{
    return <div className="_ObjectList"></div>
}

export default function Main({}){
    return <div className="d-flex flex-row justify-content-between _Main">
        <Canvas />
        <ObjectList/>
    </div>
}