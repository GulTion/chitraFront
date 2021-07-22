import React,{useState} from "react"
import I from "./Icons/"


export default function ObjectTab({icon,title,isOpen, ...props}) {
    const {unique} = props;
    

    const _setOpen = ()=>{
        const {canvas} = document._
        props.onOpen({id:props.id, isOpen:!isOpen});
        if(!unique){
        let objectAtCanvas = canvas._objects.findIndex(k=>k.id===props.id);
        if(isOpen){
            // canvas.discardActiveObject().renderAll();
        }else{
            canvas.setActiveObject(canvas.item(objectAtCanvas));
            canvas.renderAll()
        }
        
        
        }
     
    }
    return <><div className={`d-flex flex-row justify-content-between align-items-center _ObjectTab ${isOpen?"_ObjectTab_Active":""}`}>
        <div className="_TabName">
           <img src={unique?I.blank:I.dragDots} alt={title} />
                <img src={icon} alt={title} /> {title}
        </div>
        <div className="d-flex flex-row _TabButtons">
           {unique? <img src={!isOpen?I.lock:I.lock2} alt={"Lock"} />:null}
            <img src={I.down} alt={"Down"} className={`${isOpen?"_Up":""}`} onClick={()=>_setOpen()}/>
        </div>
    </div>
    <div className={`_ObjectData`} style={{display:isOpen?"block":"none"}}>{isOpen?props.children:null}</div>
    </>
}