import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";
import { connect } from "react-redux";
import "fabric-history";
import TextSettings from "./TextSettings";
import ImageSettings from "./ImageSettings";
import LogoSettings from "./LogoSettings";
import { CommanThings } from "../functions";

import I from "./Icons/";

const { log } = console;

function position({ canvas, obj, element, offset }) {
  let coord = canvas.get;
  log(coord);
}
fabric.Canvas.prototype.getAbsoluteCoords = function (object) {
  return {
    left: object.left + this._offset.left,
    top: object.top + this._offset.top,
  };
};

function Canvas(props) {
  const ref = useRef();
  const ref1 = useRef();
  const ref3 = useRef();

  const loadFromServer = async (makeState) => {
    let data = await JSON.parse(await localStorage.getItem("save"));
    if (data !== null) {
      const { canvas } = document._;
      canvas.loadFromJSON(await JSON.stringify(data.canvas));
      setTimeout(() => {
        canvas._objects.forEach((obj) => {
          obj.set({
            cornerColor: "#ffffff",
            borderColor: "#e7416a",
            cornerStrokeColor: "#e7416a",
            cornerStyle: "circle",
            transparentCorners: false,
            cornerSize: 12,
          });
        });

        let mapForSettings = ({ object, frame }) => {
          return {
            image: () => <ImageSettings object={object} frame={frame} />,
            logo: () => (
              <LogoSettings
                chooseImageTagText={"Logo"}
                object={object}
                frame={frame}
                imageSrc={I.logoImage}
              />
            ),
            profile: () => (
              <LogoSettings
                chooseImageTagText={"Profile"}
                object={object}
                frame={frame}
                imageSrc={I.profile}
              />
            ),
            website: () => (
              <LogoSettings
                chooseImageTagText={"Website"}
                object={object}
                frame={frame}
                imageSrc={I.websiteImage}
              />
            ),
          };
        };

        let newStateList = data.app.objectList.map((list) => {
          for (let index = 0; index < canvas._objects.length; index++) {
            let obj = canvas._objects[index];
            if (list.id === obj.id) {
              console.log(obj);
              if (list.type === "text") {
                return {
                  ...list,
                  element: <TextSettings object={obj} />,
                  object: obj,
                  isOpen: false,
                };
              }
              if (
                list.type === "logo" ||
                list.type === "image" ||
                list.type === "website" ||
                list.type === "profile"
              ) {
                return {
                  ...list,
                  element: mapForSettings({
                    frame: canvas._objects[index + 1],
                    object: obj,
                  })[list.type](),
                  object: obj,
                  frame: canvas._objects[index + 1],
                  isOpen: false,
                };
              }
            }
          }
        });

        makeState({ canvas: data.app.canvas, objectList: newStateList });

        canvas.renderAll();
      }, 100);
    }
  };

  const backgroundHandler = (obj) => {
    function clearCanvasBackground() {
      if (obj.canvas) {
        obj.canvas.setBackgroundImage(null);
        obj.canvas.setBackgroundColor("");
        obj.canvas.renderAll();
      }
    }

    if (obj.type === "image") {
      let img = new fabric.Image(obj.value);
      clearCanvasBackground();
      obj.canvas.setBackgroundImage(
        img,
        obj.canvas.renderAll.bind(obj.canvas),
        {
          scaleX: obj.canvas.width / img.width,
          scaleY: obj.canvas.height / img.height,
        }
      );
      // img.src = obj.value.src;
      // obj.canvas.setBackgroundImage(img.src,obj.canvas.renderAll.bind(obj.canvas))
      log(obj);
    } else {
      clearCanvasBackground();
      // obj.canvas.clear()
      obj.canvas.setBackgroundColor(obj.value, (e) => {
        obj.canvas.renderAll.bind(obj.canvas)(e);
      });
    }
  };

  useEffect(async () => {
    let realCanvas = ref1.current;
    const canvas = new fabric.Canvas(realCanvas);
    // canvas.historyInit();

    document._ = {};
    document._.selectionSettings = {
      cornerColor: "#ffffff",
      borderColor: "#e7416a",
      cornerStrokeColor: "#e7416a",
      cornerStyle: "circle",
      transparentCorners: false,
      cornerSize: 12,
    };
    document._.canvas = canvas;

    let parent = ref.current;

    let { width, height } = parent.getBoundingClientRect();

    canvas.setDimensions({
      width,
      height,
    });

    loadFromServer(props.makeState);
  }, []);

  useEffect(() => {
    backgroundHandler({
      canvas: document._.canvas,
      type: props.canvas.background.type,
      value: props.canvas.background.value,
    });
  }, [props.canvas?.background]);

  return (
    <div className="_Canvas" ref={ref}>
      <canvas ref={ref1}></canvas>
      {/* <div className="text" ref={ref3} style={{position:"fixed"}}>TEXT</div> */}
    </div>
  );
}

const mstp = (state) => {
  return {
    canvas: state.canvas,
  };
};

const mftop = (dispatch) => {
  return {
    addToUndo: (object) => dispatch({ type: "ADD_UNDO", data: object }),
    makeState: (data) =>
      dispatch({
        type: "MAKE_STATE",
        data,
      }),
  };
};

export default connect(mstp, mftop)(Canvas);
