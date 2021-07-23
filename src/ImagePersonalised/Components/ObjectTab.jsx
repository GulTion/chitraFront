import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import I from "./Icons/";
const {log} = console

function ObjectTab({ icon, title, isOpen, ...props }) {
  const { unique, text, object ,id } = props;
  const [isRename, setRename] = useState(false);
      if(!unique){
        object.on("selected", ()=>{
        text.style.display = "block";
        log('working')
        log("what")
        props.onOpen({id, isOpen:true,select:true})
        
    })
   object.on("deselected", ()=>{
        text.style.display = "none"
        // openObjectOnSelect({id,select:false})
        props.onOpen({id, isOpen:false,select:false})
    })
    document._.canvas.on('object:scaling', (e)=>{
    //    props.onScaling(Number(e.target.scaleY*40).toFixed(2))
 })

      }

      

  const _setOpen = () => {
    const { canvas } = document._;
    props.onOpen({ id: props.id, isOpen: !isOpen });
    if (!unique) {
      if (!isOpen){
        canvas.setActiveObject(props.object);

        canvas.renderAll();
        return;
      }

      }
    
  };

  return (
    <>
      <div
        className={`d-flex flex-row justify-content-between align-items-center _ObjectTab ${
          (isOpen||props.select )? "_ObjectTab_Active" : ""
        }`}
      >
        <div className="_TabName">
          <img src={unique ? I.blank : I.dragDots} alt={title} />
          <img src={icon} alt={title} />
          {isRename ? (
            <input
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setRename(false);
                }
              }}
              type="text"
              disabled={!isRename}
              className={"_ObjectTabRename"}
              value={title}
              onChange={(e)=>props.onRename({value:e.target.value, id:props.id})}
              onBlur={() => {
                setRename(false);
              }}
            />
          ) : (
            <span
              className="_ObjectTabNotRename"
              onDoubleClick={() => setRename(true)}
            >
              {title}
            </span>
          )}
        </div>
        <div className="d-flex flex-row _TabButtons">
          {unique ? (
            <img src={!isOpen ? I.lock : I.lock2} alt={"Lock"} />
          ) : null}

{!unique ? (
            <img
              src={I.zindex}
              alt={"zindex"}
              onClick={() => props.onDelete({id:props.id, object:props.object})}
            />
          ) : null}
          {!unique ? (
            <img
              src={I.remove}
              alt={"Delete"}
              onClick={() => props.onDelete({id:props.id, object:props.object})}
            />
          ) : null}
           
          <img
            src={I.down}
            alt={"Down"}
            className={`${isOpen ? "_Up" : ""}`}
            onClick={() => _setOpen()}
          />
        </div>
      </div>
      <div
        className={`_ObjectData`}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {isOpen ? props.children : null}
      </div>
    </>
  );
}

const mptf = (dispatch) => {
  return {
    onDelete: ({object,id}) => {
      const { canvas } = document._;
      canvas.remove(object);
      canvas.renderAll();
      dispatch({ type: "OBJECT_DELETE", data: { id } });
    },

    onRename: (obj) => dispatch({type:'OBJECT_RENAME', data:obj}),
    onOpen:({id, isOpen})=>dispatch({type:"OBJECT_LIST_CLOSE", data:{id, isOpen}})

  };
};

export default connect(() => {}, mptf)(ObjectTab);
