import React,{useState} from 'react'
import {createDrawing} from "./api"
export default function NewAdd(props) {
    const [isPublic, setPublic] = useState(0);
    const [key, setKey] = useState("");
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        createDrawing({name, key});
        setKey("");
        setName("");
        props.save()
    }
    return (
        <div className="NewAdd">
            <div className="row"><select name="" id="" className="type" onChange={e=>{
                setPublic(e.target.value)
            }}>
            <option value={0}>{"Select Permissions"}</option>
                {[
                    {text:"Public can VIEW, EDIT AND DELETE", value:1},
                    {text:"Public can VIEW, EDIT", value:2},
                    {text:"Public can VIEW", value:3},
                    {text:"Public can't do anything", value:4},
                    ].map(e=> <option value={e.value}>{e.text}</option>
                    )}
            </select>
            {((name!=""&&(key!=""||isPublic==1)))?<button className="save" onClick={handleSubmit}>SAVE</button>:null}
            </div>
            {(isPublic>1)?<input value={key} onChange={(e)=>setKey(e.target.value)} type="text" placeholder="Password of Drawing" className="key"/>:null}
           {isPublic!=0?<input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name of Drawing" className="name"/>:null}
           
        </div>
    )
}
