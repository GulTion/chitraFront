import React from "react";
import { connect } from "react-redux";
import I from "./Icons/";

const { log } = console;

const Footing = ({ heading }) => {
  return <div className="_Footing">{heading}</div>;
};

const Buttons = ({ onDiscard, onSave }) => {
  return (
    <div className="d-flex flex-row _Buttons">
      <div className="_Discard">Discard</div>
      <div
        className="d-flex flex-row align-items-center _Save"
        onClick={() => onSave()}
      >
        Save
        <img src={I.save} alt={"Save"} />
      </div>
    </div>
  );
};

function Footer(props) {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center _Footer">
      <Footing heading={"Total number of merge tags used in this image: 4"} />
      <Buttons
        onDiscard={() => {}}
        onSave={() => {
          let noObject = props.state.objectList.map((e) => {
            return {
              ...e,
              object: null,
              element: null,
              props: {
                object: null,
              },
              frame: null,
            };
          });
          noObject.pop();
          let newState = {
            ...props.state,
            objectList: noObject,
          };

          localStorage.setItem(
            "save",
            JSON.stringify({
              app: newState,
              canvas: document._.canvas.toJSON(["id"]),
            })
          );
        }}
      />
    </div>
  );
}

const mstp = (state) => {
  return {
    state,
  };
};

export default connect(mstp)(Footer);
