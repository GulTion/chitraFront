import React from "react"
import { useState } from "react"
import { connect } from "react-redux"
import CurrentColor from "../CurrentColor"
import ImageTab from "../ImageTab"
import ChangeImage from "./ChangeImage"

function ChooseImage(props) {
    const [currentImage, setImage] = useState({
        type:"Image",
        value:"",
        name:"None"

    })
    return (<div className={`_ChooseImage`}>
        <div className="_ChooseBack" onClick={()=>props.onBack(false)}>
           {'<'} Choose Image
        </div>
        <CurrentColor isColor={false} value={currentImage.value.src} name={currentImage.name}/>
        <ImageTab chooseImage={(e)=>{
            const {canvas} = document._;
            const img = canvas.getActiveObject();
            img.setElement(e.value)
            console.log(e.value)
            canvas.renderAll()
            setImage(e)}} index={currentImage.index}/>
    </div>)
}

export default connect()(ChooseImage)