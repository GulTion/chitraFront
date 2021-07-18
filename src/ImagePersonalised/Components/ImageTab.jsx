import React, {useState} from "react"
import I from "./Icons/"

export default function ImageTab({}){
    const [searchValue, setSearchValue] = useState("")
    const [selectedImage, setImage] = useState(-1);
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
            <img src={I.upload} alt="" />
            Drag & Drop your image here!
        </div>
        <div className="_Imagelist">
            {[
                {src:I.dummy, label:"Image Name"},
                {src:I.dummy, label:"Image Name2"},
                {src:I.dummy, label:"Image Name6"},
                {src:I.dummy, label:"Image Name4"},
        ].map((obj, i)=>{
            return <div className={`_ImageElement `} onClick={()=>{setImage(i)}}>
                <img src={obj.src} className={`_Image ${selectedImage==i?"_ImageActive":""}`} onClick={()=>{setImage(i)}}/>
                <div className="_Label">{obj.label}</div>
            </div>
        })}
        </div>
    </div>
}