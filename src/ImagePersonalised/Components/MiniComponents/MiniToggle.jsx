import React, {useState} from "react"


export default function MiniToggle({activeIcon, normalIcon, toggle, onToggle}){

    return (<div className={`_MiniToggle ${toggle?"_MiniToggleActive":""}`} onClick={()=>{
        onToggle(!toggle)
        // setToggle(!_toggle);
    }}>
        <img src={toggle?activeIcon:normalIcon} alt={"TOogle"}/>
    </div>)
}