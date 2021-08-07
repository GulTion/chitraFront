import React, { useState } from "react";
import I from "./Icons/";
import {
  addTextToCanvas,
  addImageToCanvas,
  addLogoToCanvas,
} from "../functions";
import { connect } from "react-redux";
import uuid from "uuid-random";
import TextSettings from "./TextSettings";
import ImageSettings from "./ImageSettings";
import LogoSettings from "./LogoSettings";
import { fabric } from "fabric";
// import { log } from "fabric/fabric-impl";

const { log } = console;

const Tabs = ({ tabList }) => {
  return (
    <div className="d-flex flex-row _Tabs">
      {tabList.map((e, i) => {
        return (
          <div
            className={`d-flex flex-row justify-content-center align-items-center _Tab`}
            onClick={e.onClick}
          >
            <img src={e.icon} alt={e.text} />
            {e.text}
          </div>
        );
      })}
    </div>
  );
};

const Input = ({ onChange, value, onBlur }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="_Input"
    />
  );
};

const UnRedo = ({ onUndo, onRedo, isUndo, isRedo }) => {
  return (
    <div className="_UnRedo d-flex flex-row _Tabs">
      {isUndo || (
        <div
          className={`d-flex flex-row justify-content-center align-items-center _Tab`}
          onClick={onUndo}
        >
          <img src={I.undo} alt={"undo"} />
          {"Undo"}
        </div>
      )}
      {isRedo || (
        <div
          className={`d-flex flex-row justify-content-center align-items-center _Tab`}
          onClick={onRedo}
        >
          <img src={I.redo} alt={"Redo"} />
          {"Redo"}
        </div>
      )}
    </div>
  );
};

function Tool(props) {
  const [value, setValue] = useState("");
  const TabData = [
    {
      icon: I.text,
      text: "Text",
      onClick: () => {
        props.addObject({
          type: "text",
          title: "untitled text 1",
          element: (object) => <TextSettings object={object} />,
          addObjectToCanvas: addTextToCanvas,
        });
      },
    },
    {
      icon: I.image,
      text: "Image",
      onClick: () => {
        props.addObject({
          isOpen: false,
          type: "image",
          title: "untitled image 1",
          element: (object, frame) => (
            <ImageSettings object={object} frame={frame} />
          ),
          addObjectToCanvas: addImageToCanvas,
        });
      },
    },
    {
      icon: I.logo,
      text: "Logo",
      onClick: () => {
        props.addObject({
          isOpen: false,
          type: "logo",
          title: "untitled logo 1",
          imageWidth: 218,
          imageSrc: I.logoImage,
          imageHeight: 116,
          element: (object, frame) => (
            <LogoSettings
              chooseImageTagText={"Logo"}
              object={object}
              frame={frame}
              imageSrc={I.logoImage}
            />
          ),
          addObjectToCanvas: addLogoToCanvas,
        });
      },
    },
    {
      icon: I.profile,
      text: "profile",
      onClick: () => {
        props.addObject({
          isOpen: false,
          type: "profile",
          title: "untitled Profile 1",
          textName: "Profile",
          imageSrc: I.profileImage,
          imageWidth: 118,
          imageHeight: 118,
          element: (object, frame) => (
            <LogoSettings
              chooseImageTagText={"Profile"}
              object={object}
              frame={frame}
              imageSrc={I.profile}
            />
          ),
          addObjectToCanvas: addLogoToCanvas,
        });
      },
    },
    {
      icon: I.website,
      text: "Website",
      onClick: () => {
        props.addObject({
          isOpen: false,
          type: "website",
          title: "untitled website 1",
          textName: "Website",
          imageSrc: I.websiteImage,
          imageWidth: 450,
          imageHeight: 250,
          element: (object, frame) => (
            <LogoSettings
              chooseImageTagText={"Website"}
              object={object}
              frame={frame}
              imageSrc={I.websiteImage}
            />
          ),
          addObjectToCanvas: addLogoToCanvas,
        });
      },
    },
  ];
  return (
    <div className="d-flex justify-content-between align-items-center _Tool">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Tabs tabList={TabData} />
      <UnRedo
        isRedo={props.undoRedo.arr.length === props.undoRedo.arr.pointer + 1}
        isUndo={props.undoRedo.arr.pointer === -1}
        onUndo={() => {
          let { canvas } = document._;
          // canvas.undo();
          let prev = props.undoRedo.arr[props.undoRedo.pointer - 1];
          if (prev !== undefined) {
            // alert("undo");
            let currnet = canvas._objects.find((e) => e.id === prev.id);
            if (currnet) {
              log(prev);
              currnet.set(prev);
              // canvas.discardActiveObject().renderAll();
              // canvas.remove(currnet);
              // let klass = fabric.util.getKlass(currnet.type);
              // canvas.add(klass.fromObject(prev));
              // canvas.add({ ...currnet, ...prev });
              canvas.renderAll();
              props.doUndo(props.undoRedo.pointer - 1);
            }
            if (prev.visible) {
              props.setVisible({ id: "asf" });
              // log("CURRENT", currnet.visible, "PREV", prev.visible);
            }
          }
        }}
        onRedo={() => {
          let { canvas } = document._;
          // canvas.undo();
          let next = props.undoRedo.arr[props.undoRedo.pointer + 1];
          if (next !== undefined) {
            // alert("undo");
            let currnet = canvas._objects.find((e) => e.id === next.id);
            if (currnet) {
              log("CUREENT");
              log(next);
              currnet.set(next);
              // canvas.discardActiveObject().renderAll();
              // canvas.remove(currnet);
              // let klass = fabric.util.getKlass(currnet.type);
              // canvas.add(klass.fromObject(next));
              // canvas.add({ ...currnet, ...next });
              canvas.renderAll();
              props.doUndo(props.undoRedo.pointer + 1);
            }
          }
        }}
      />
    </div>
  );
}

const mstp = (state) => {
  return {
    undoRedo: state.undoRedo,
  };
};

const mptf = (dispatch) => {
  return {
    addObject: ({
      type,
      title,
      element,
      addObjectToCanvas,
      isOpen = false,
      imageSrc,
      textName,
      imageHeight,
      imageWidth,
    }) => {
      const id = uuid();
      const {
        text,
        object,
        frame = null,
      } = addObjectToCanvas({
        id,
        textName,
        imageSrc,
        imageWidth,
        imageHeight,
        type,
      });
      dispatch({
        type: "ADD_OBJECT",
        data: {
          type,
          element: element(object, frame),
          icon: I[type],
          isOpen,
          title,
          unique: false,
          text,
          object,
          id,
          select: false,
          frame,
          visible: true,
        },
      });
    },

    doUndo: (pointer) => dispatch({ type: "DO_UNDO", data: pointer }),
    setVisible: ({ id }) => dispatch({ type: "OBJECT_DELETE", data: { id } }),
    // addTextToObjectList:action=>dispatch(action),
    // openObjectOnSelect:({id,select})=>dispatch({type:'OBJECT_LIST_CLOSE', data:{id, isOpen:select}})
  };
};
export default connect(mstp, mptf)(Tool);
