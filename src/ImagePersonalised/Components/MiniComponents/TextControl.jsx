import React,{useState} from "react"
import I from "../Icons/"

export default function TextControl(props){
    const [isMergeOpen, setMerge] = useState(false);
    const mergeTags = [
        "{First Name}",
        "{Company}",
       "{Job Title}",
        "{Number}",
       "{Location}"
    ]
    return (<>
    <div style={{position:"relative"}}>
        <div className={`_MergeTag ${isMergeOpen?"_MergeTag_Active":""}`} onClick={()=>{
            setMerge(!isMergeOpen)
        }}>
           {`{}`} Merge Tag <img style={{transform:`rotateZ(${isMergeOpen?"180":"0"}deg)`}} src={I.down}/>
        </div>
      { isMergeOpen? <div className="_MergeTagOption">
            {mergeTags.map((e,i)=>{
                return <div onClick={()=>{
                    const {canvas} = document._;
                    let activeE = document._.canvas.getActiveObject();
                               
                    activeE.insertChars(e,null,null);
                    document._.canvas.renderAll()
                }}>{e}</div>
            })}
        </div>:null}

        </div>
    
        <img src={props.isOpen?I._SettingsActive:I._SettingsNormal} onClick={
            ()=>{
                props.onOpen({id:props.id, isOpen:!props.isOpen})
            }
        } alt="_d" className="_ControlIcons"/>
        <img src={I._Delete} alt="_d" className={"_ControlIcons"} onClick={()=>{
            props.onDelete({object:props.object, id:props.id})
        }}/>
      
  
    </>)
}