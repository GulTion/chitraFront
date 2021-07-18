import React,{useState} from "react"
import I from "./Icons/"

export default function ColorTab({}){
    const [selectedColor, setColor] = useState(-1)
    const colors =["#ffffff","#f5cb5c","#f79d84", "#4c5454", "#eae4e9","#c9184a","#5a189a"]
    return <div className="_ColorTab">
        <div className="d-flex flow-row justify-content-center align-items-center _Color _Custom_Color">
            <img src={I.add} alt="add"/>
        </div>
            {colors.map((color,i)=>{
                return <div key={`${color}_${i}`} className={`_Color ${selectedColor==i?"_Color_Selected":""}`} style={{backgroundColor:color}} onClick={()=>setColor(i)}></div>
            })}
    </div>
}