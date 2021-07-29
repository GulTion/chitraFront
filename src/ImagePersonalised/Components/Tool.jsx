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

const UnRedo = ({ onUndo, onRedo }) => {
  return (
    <div className="_UnRedo d-flex flex-row _Tabs">
      <div
        className={`d-flex flex-row justify-content-center align-items-center _Tab`}
        onClick={onUndo}
      >
        <img src={I.undo} alt={"undo"} />
        {"Undo"}
      </div>
      <div
        className={`d-flex flex-row justify-content-center align-items-center _Tab`}
        onClick={onRedo}
      >
        <img src={I.redo} alt={"Redo"} />
        {"Redo"}
      </div>
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
      text: "Profile",
      onClick: () => {
        props.addObject({
          isOpen: false,
          type: "profile",
          title: "untitled profile 1",
          textName: "Profile",
          imageSrc: I.profileImage,
          imageWidth: 118,
          imageHeight: 118,
          element: (object, frame) => (
            <LogoSettings
              chooseImageTagText={"Profile"}
              object={object}
              frame={frame}
              imageSrc={I.profileImage}
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
      <UnRedo onUndo={() => {}} onRedo={() => {}} />
    </div>
  );
}

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
      } = addObjectToCanvas(id, textName, imageSrc, imageWidth, imageHeight);
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
        },
      });
    },
    // addTextToObjectList:action=>dispatch(action),
    // openObjectOnSelect:({id,select})=>dispatch({type:'OBJECT_LIST_CLOSE', data:{id, isOpen:select}})
  };
};
export default connect(() => {
  return {};
}, mptf)(Tool);
