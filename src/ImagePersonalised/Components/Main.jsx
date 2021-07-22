import React from "react"
import ObjectTab from "./ObjectTab"
import I from "./Icons/"
import ArtBoardSettings from "./ArtBoardSettings"
import ImageSettings from "./ImageSettings"
import TextSettings from "./TextSettings"
import Canvas from "./Canvas"
import { useState } from "react"
import uuid from "uuid-random"
import { connect } from "react-redux"
import ObjectList from "./ObjectList"



function Main(){
    return <div className="d-flex flex-row justify-content-between _Main">
        <Canvas />
        <ObjectList />
    </div>
}

export default connect()(Main);

