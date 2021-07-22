import { connect } from "react-redux"
import React from "react"
import ObjectTab from "./ObjectTab"
import ArtBoardSettings from "./ArtBoardSettings"
import I from "./Icons/"
import uuid from "uuid-random"

const ObjectList = (props)=>{

    return <div className="_ObjectList" >

        {/* <ObjectTab icon={I.text} title="Text Settings" isOpen={!false}>
           <TextSettings />
        </ObjectTab>
        <ObjectTab icon={I.image} title="Image Settings">
           <ImageSettings />
        </ObjectTab>
        */}

        {props.objectList.map((obj, i)=>{
            return  (<ObjectTab 
                icon={obj.icon} 
                title={obj.title} 
                isOpen={obj.isOpen}
                unique={obj.unique}
                id={obj.id}
                key={obj.id}
                onOpen={props.onObjectListClose}
                >
            {obj.element}
        </ObjectTab>)
        })}
        
    </div>
}

const mstp=state=>{
    return {
        objectList:state.objectList
    }
}

const mptf = dispatch =>{
    return {
        onObjectListClose:(obj)=>dispatch({type:"OBJECT_LIST_CLOSE", data:obj})
    }
}

export default connect(mstp, mptf)(ObjectList)