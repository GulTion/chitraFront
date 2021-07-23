import React,{useState} from "react"
import I from "./Icons/"
import { addTextToCanvas,addImageToCanvas } from "../functions"
import { connect } from "react-redux"
import uuid from "uuid-random"
import TextSettings from "./TextSettings"
import ImageSettings from "./ImageSettings"
 
const Tabs = ({tabList})=>{
    return <div className="d-flex flex-row _Tabs">
        {tabList.map((e,i)=>{
            return <div className={`d-flex flex-row justify-content-center align-items-center _Tab`} onClick={e.onClick}>
                <img src={e.icon} alt={e.text}/>
                {e.text}
            </div>
        })}
    </div>
}

const Input = ({onChange, value, onBlur})=>{
    return <input type="text" value={value} onChange={onChange} onBlur={onBlur} className="_Input"/>
}

const UnRedo = ({onUndo, onRedo})=>{
    return <div className="_UnRedo d-flex flex-row _Tabs">
        <div className={`d-flex flex-row justify-content-center align-items-center _Tab`} onClick={onUndo}>
                <img src={I.undo} alt={"undo"}/>
                {"Undo"}
            </div>
            <div className={`d-flex flex-row justify-content-center align-items-center _Tab`} onClick={onRedo}>
                <img src={I.redo} alt={"Redo"}/>
                {"Redo"}
            </div>
    </div>
}

function Tool(props){
    const [value,setValue] = useState("")
    const TabData = [
        { icon:I.text, text:"Text", onClick:()=>{props.addObject({type:'text', title:'untitled text 1', element:(object)=><TextSettings object={object}/>, addObjectToCanvas:addTextToCanvas})} },
        { icon:I.image, text:"Image" , onClick:()=>{props.addObject({type:'image', title:'untitled image 1', element:(object)=><ImageSettings object={object}/>, addObjectToCanvas:addImageToCanvas})}},
        { icon:I.logo, text:"Logo" , onClick:()=>{}},
        { icon:I.profile, text:"Profile" , onClick:()=>{}},
        { icon:I.website, text:"Website" , onClick:()=>{}},
]
    return (<div className="d-flex justify-content-between align-items-center _Tool">
        <Input value={value} onChange={(e)=>setValue(e.target.value)}/>
        <Tabs tabList={TabData}/>
        <UnRedo onUndo={()=>{}} onRedo={()=>{}}/>
    </div>)
}

const mptf = dispatch =>{
    
    return {
        addObject:({type, title,element, addObjectToCanvas})=>{
            const id = uuid();
            const {text, object} = addObjectToCanvas(id);
            dispatch({type:'ADD_OBJECT', data:{
                        type,
                        element:element(object),
                        icon:I[type],
                        isOpen:false,
                        title,
                        unique:false,
                        text,
                        object,
                        id,
                        select:false
            }})
        },
        // addTextToObjectList:action=>dispatch(action),
        // openObjectOnSelect:({id,select})=>dispatch({type:'OBJECT_LIST_CLOSE', data:{id, isOpen:select}})
    }
}
export default connect(()=>{},mptf)(Tool)