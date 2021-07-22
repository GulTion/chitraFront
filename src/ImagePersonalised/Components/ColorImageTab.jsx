import React,{useState} from "react"
import I from "./Icons/"
import ColorTab from "./ColorTab";
import ImageTab from "./ImageTab";

function OneTab({text, icon,activeIcon, isActive, onClick,isSeleted}){
    return (<div className={`d-flex justify-content-center align-items-center _OneTab ${isActive?"_OneTabActive":""}`} onClick={onClick}>
        {isSeleted?<img src={isActive?I.colorCheck:I.greyCheck} alt={"check"} className="_CheckIcon"/>:null}
        {isActive?<div className={"_TabColorLine"}></div>:null}
        <div className={`_Text ${isActive?"_Text_active":""}`}>{text}</div> <img src={isActive?activeIcon:icon} alt={text} className="_Icon"/>
    </div>)
}

export default function ColorImageTab(props) {
   
    const [active,setActive] = useState(props.ColorImageTab.type==="image"?1:0);
    const [none, setNone] = useState(-1);
    const TabIndex = [
        <ColorTab {...props.ColorImageTab} chooseColor={props.ColorSelected}/>,
        <ImageTab {...props.ColorImageTab} chooseImage={props.ColorSelected}/>
    ]
    

    return (<div className="_ColorImageTab">
        <div className="d-flex _Tab">
            <OneTab isSeleted={props.ColorImageTab.type==="color"} text="Color" icon={I.whiteDrop} activeIcon={I.colorDrop} isActive={active===0} onClick={()=>setActive(0)}></OneTab>
            <OneTab isSeleted={props.ColorImageTab.type==="image"} text="Image" icon={I.whiteImage} activeIcon={I.colorImage} isActive={active===1} onClick={()=>setActive(1)}></OneTab>
        </div>
        <div className="_TabContent" style={{position:"relative", height:"100%"}}>
           {TabIndex.map((ele, index)=>{
               return (<div className={`${active===index?"slide-in-right":"slide-out-left"}`}
                
               onAnimationEnd={e=>{
                   if(active===index){
                    setNone(index)
                }else{
                    
                   setNone(active)

                   }
               }}  
               
               key={`_ColorImageTab_${index}`}
               style={{display:!none===index?"none":"block",position:"absolute"}}
             
               >{ele}</div>)
           })}
        </div>
    </div>)
}

