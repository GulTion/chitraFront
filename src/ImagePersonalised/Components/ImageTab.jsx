import React, {useState} from "react"
import I from "./Icons/"

export default function ImageTab(props){
    const [searchValue, setSearchValue] = useState("")

    
    return <div className="_ImageTab">
        <div className="d-flex flex-row justify-content-between align-items-center _SearchSection">
            <div className="d-flex flex-row _SearchInput" tabIndex={1}>
                <img src={I.search} alt={"Search"} />
                <input type="text" placeholder="Search Image" value={searchValue} onChange=
                {(e)=>setSearchValue(e.target.value)}/>
            </div>
            <div className="_SelectInput">My Uploads</div>
        </div>
        <div className="_DragAndDropImage">
            <img src={I.upload} alt= {"uploadicon"}/>
            Drag & Drop your image here!
        </div>
        <div className="_Imagelist">
            {[
                {src:I.dummy, label:"Image Name"},
                {src:I.dummy, label:"Image Name2"},
                {src:I.dummy, label:"Image Name6"},
                {src:I.dummy, label:"Image Name4"},
        ].map((obj, i)=>{
            return <div className={`_ImageElement `} >
                <img alt={`${obj.label}`} src={obj.src} className={`_Image ${props.type==="color"?-1:props.index===i?"_ImageActive":""}`} onClick={(e)=>{props.chooseImage({type:"image", value:e.target, index:i,name:obj.label})}}/>
                <div className="_Label">{obj.label}</div>
            </div>
        })}
        </div>
    </div>
}