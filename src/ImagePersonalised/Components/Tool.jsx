import React,{useState} from "react"
import I from "./Icons/"

 
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

export default function Tool(){
    const [value,setValue] = useState("")
    const TabData = [
        { icon:I.text, text:"Text", onClick:()=>{} },
        { icon:I.image, text:"Image" , onClick:()=>{}},
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