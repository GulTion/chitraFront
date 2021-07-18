import React from "react"
import I from "./Icons/"


const Heading = React.memo(({heading})=>{
    return <div className="_Heading">{heading}<img src={I.info} alt={""}/></div>
})

const Close = React.memo(()=>{
    return <img src={I.close} alt={""} className="_Close"/>
})

export default function Header(){
    return <div className="d-flex flex-row justify-content-between _Header">
        <Heading heading={"New Personalised Image"}/>
        <Close/>
    </div>
}

