import React, { useState,useRef } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import I from "./Icons/";
import TextControl from "./MiniComponents/TextControl";
import ImageControl from "./MiniComponents/ImageControl";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';

const {log} = console

function ObjectTab({ icon, title, isOpen, ...props }) {
  const textControl = useRef()

  const { unique, text, object ,id } = props;
  const [isRename, setRename] = useState(false);
  const [name, setName] = useState(title)

  

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
  const DragHandle = sortableHandle(() => <img draggable={false} src={unique ? I.blank : I.dragDots} alt={title} />);

  return (
    <>
      <div
        className={`d-flex flex-row justify-content-between align-items-center _ObjectTab ${
          (isOpen||props.select )? "_ObjectTab_Active" : ""
        }`}
      >
        <div className="_TabName">
          <DragHandle/>
          <img src={icon} alt={title} />
          {isRename ? (
            <input
              onKeyDown={(e) => {
                log(e.key)
                if (e.key == "Enter") {
                setRename(false);

                  props.onRename({value:name, id:props.id})
                }
              }}
              type="text"
              disabled={!isRename}
              className={"_ObjectTabRename"}
              value={name}
              onChange={(e)=>setName(e.target.value)}
              onBlur={() => {
                setRename(false);
                props.onRename({value:name, id:props.id})
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
        {props.type==='text'&&<div className="_TextControl" id={`_${props.id}-textControl`}><TextControl /></div>}
        {props.type==='image'&&<div className="_TextControl" id={`_${props.id}-imageControl`}><ImageControl /></div>}
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

export default connect(() => {return {}}, mptf)(ObjectTab);
