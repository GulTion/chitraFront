import React from "react";
import ChangeImage from "./MiniComponents/ChangeImage";
import LinkUnlink from "./MiniComponents/LinkUnlink";
import MiniInput from "./MiniComponents/MiniInput";
import FrameInput from "./MiniComponents/FrameInput";
import SliderInput from "./MiniComponents/SliderInput";
import InputColor from "react-input-color";
import InputSlider from "react-input-slider";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import ChooseImageTag from "./MiniComponents/ChooseImageTag";

const { log } = console;

function ImageSettings(props) {
  const [width, setWidth] = useState(
    Number(props.object.width * props.object.scaleX).toFixed(1)
  );
  const [height, setHeight] = useState(
    Number(props.object.height * props.object.scaleY).toFixed(1)
  );
  const [ratio, setRatio] = useState(true);
  useEffect(() => {
    log(props);
    props.object.on("scaling", () => {
      setWidth(Number(props.object.width * props.object.scaleX).toFixed(1));
      setHeight(Number(props.object.height * props.object.scaleY).toFixed(1));
    });
  }, []);
  return (
    <div className="_ImageSettings">
      <ChooseImageTag
        chooseImage={() => props.chooseImageActivator(true)}
        object={props.object}
        mergeText={"{Profile}"}
        imageTagText={"Add Image +"}
      />
      <div className="d-flex flex-row justify-content-between _WidthHeight">
        <div className="d-flex flex-row ">
          <MiniInput
            value={height}
            onChange={(e) => {
              setHeight(Number(e).toFixed(1));
              let prevScale = props.object.scaleY;
              let newScale = e / props.object.height;
              let scaleRatio = newScale / prevScale;

              if (ratio) {
                props.object.set({
                  scaleX: props.object.scaleX * scaleRatio,
                  scaleY: newScale,
                });
                setWidth(
                  Number(props.object.width * props.object.scaleX).toFixed(1)
                );
              } else {
                props.object.set({ scaleY: newScale });
              }

              document._.canvas.renderAll();
            }}
            label="Height:"
          />
          <LinkUnlink toggle={ratio} setToggle={(e) => setRatio(e)} />
          <MiniInput
            value={width}
            onChange={(e) => {
              setWidth(Number(e).toFixed(1));
              let prevScale = props.object.scaleX;
              let newScale = e / props.object.width;
              let scaleRatio = newScale / prevScale;

              if (ratio) {
                props.object.set({
                  scaleX: newScale,
                  scaleY: props.object.scaleY * scaleRatio,
                });
                setHeight(
                  Number(props.object.height * props.object.scaleY).toFixed(1)
                );
              } else {
                props.object.set({ scaleX: newScale });
              }

              document._.canvas.renderAll();
            }}
            label="Width:"
          />
        </div>
        <FrameInput label="Frame" object={props.object} frame={props.frame} />
      </div>
      <SliderInput
        label="SkewX"
        value={props.object.skewX}
        max={90}
        min={-90}
        onChange={(e) => {
          props.object.set({ skewX: e });
          document._.canvas.renderAll();
        }}
        step={1}
      />
      <SliderInput
        label="SkewY"
        value={props.object.skewY}
        max={90}
        min={-90}
        step={1}
        onChange={(e) => {
          props.object.set({ skewY: e });
          document._.canvas.renderAll();
        }}
      />
    </div>
  );
}

const mftp = (dispatch) => {
  return {
    chooseImageActivator: (bool) =>
      dispatch({
        type: "CHOOSE_IMAGE_ACTIVATE",
        data: true,
      }),
  };
};

export default connect(() => {
  return {};
}, mftp)(ImageSettings);
