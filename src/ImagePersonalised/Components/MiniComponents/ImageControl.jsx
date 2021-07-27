import React,{useState} from "react"
import { connect } from "react-redux";
import I from "../Icons/"


function ImageControl(props){
    const [isMergeOpen, setMerge] = useState(false);
    return (<>
        <div  className={`_MergeTag _ChangeImageButton ${isMergeOpen?"_MergeTag_Active":""}`} onClick={()=>{
            props.chooseImageActivator(!isMergeOpen)
            setMerge(!isMergeOpen);
        
        }}>
            Change Image <img src={I.refresh}></img>
        </div>
    </>)
}

const mstp=state=>{
    return {
        isChooseImageActive:state.isChooseImageActive
    }
}

const mftop = dispatch =>{
    return{
        chooseImageActivator:(bool)=>dispatch({
            type:"CHOOSE_IMAGE_ACTIVATE",
            data:bool
        })
    }
}
export default connect(mstp,mftop)(ImageControl)
