import React from "react"
import { useState } from "react"
import I from "../Icons/"

export default function LinkUnlink(props) {
    const {toggle, setToggle} = props;
    return (<div className="d-flex flex-column justify-content-end _LinkUnlink">
        <img src={toggle?I.link:I.unlink} alt={"link"} onClick={()=>setToggle(!toggle)} />
    </div>)
}