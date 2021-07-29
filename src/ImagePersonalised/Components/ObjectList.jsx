import { connect } from "react-redux"
import React from "react"
import ObjectTab from "./ObjectTab"
import ArtBoardSettings from "./ArtBoardSettings"
import I from "./Icons/"
import uuid from "uuid-random"
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import ChooseImage from "./MiniComponents/ChooseImage"

const ObjectList = (props)=>{
    const SortableItem = SortableElement(({obj}) =><ObjectTab 
    key={uuid()}
    // onOpen={props.onOpen}
    object={obj.object}
    {...obj}
    >
{obj.element}
</ObjectTab>);

const SortableList = SortableContainer(({items}) => {
    return (
        <div className="_ObjectList" >
            <>
        {items.map((obj, index) => (
         <SortableItem key={`${index+uuid()}`} lockAxis={"y"} axis={'y'} index={index} obj={obj}/>
         
        ))}
      
        </>
        {props.isChooseImageActive&&<ChooseImage onBack={props.chooseImageActivator}/>}
      </div>
    );
  });


    return <>

        <SortableList useDragHandle={true} items={props.objectList} onSortEnd={props.sortObjectList}/>
        

    </>
}

const mstp=state=>{
    return {
        objectList:state.objectList,
        isChooseImageActive:state.isChooseImageActive
    }
}

const mptf = dispatch =>{
    return {
        onObjectListClose:(obj)=>dispatch({type:"OBJECT_LIST_CLOSE", data:obj}),
        chooseImageActivator:(bool)=>dispatch({
            type:"CHOOSE_IMAGE_ACTIVATE",
            data:bool
        }),
        sortObjectList:(o)=>dispatch({
            type:"SORT_LIST",
            data:o
        })
    }
}

export default connect(mstp, mptf)(ObjectList)