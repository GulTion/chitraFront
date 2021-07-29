import React, { useState } from "react";
import { connect } from "react-redux";
import I from "../Icons/";

function LogoControl(props) {
  const [isMergeOpen, setMerge] = useState(false);
  const [who, setWho] = useState(props.object.chooseImageTagType);
  const mergeTags = [`{${props.mergeTagText}}`, `Add ${props.mergeTagText}`];
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          className={`_MergeTag ${isMergeOpen ? "_MergeTag_Active" : ""}`}
          onClick={() => {
            setMerge(!isMergeOpen);
          }}
        >
          {mergeTags[who]}{" "}
          <img
            style={{ transform: `rotateZ(${isMergeOpen ? "180" : "0"}deg)` }}
            src={I.down}
          />
        </div>
        {isMergeOpen ? (
          <div className="_MergeTagOption">
            {mergeTags.map((e, i) => {
              return (
                <div
                  onClick={() => {
                    props.object.chooseImageTagType = i;
                    if (i === 1) {
                      props.chooseImageActivator(true);
                    }
                    setWho(i);
                    setMerge(false);
                  }}
                >
                  {e}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <img
        src={props.isOpen ? I._SettingsActive : I._SettingsNormal}
        onClick={() => {
          props.onOpen({ id: props.id, isOpen: !props.isOpen });
        }}
        alt="_d"
        className="_ControlIcons"
      />
      <img
        src={I._Delete}
        alt="_d"
        className={"_ControlIcons"}
        onClick={() => {
          props.onDelete({ object: props.object, id: props.id });
        }}
      />
    </>
  );
}

const mstp = (state) => {
  return {
    isChooseImageActive: state.isChooseImageActive,
  };
};

const mftop = (dispatch) => {
  return {
    chooseImageActivator: (bool) =>
      dispatch({
        type: "CHOOSE_IMAGE_ACTIVATE",
        data: bool,
      }),
  };
};
export default connect(mstp, mftop)(LogoControl);
