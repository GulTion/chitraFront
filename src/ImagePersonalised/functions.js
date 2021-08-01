import React, { useState } from "react";
import ReactDOM from "react-dom";
import { fabric } from "fabric";
import Store from "./store";
import uuid from "uuid-random";
import TextSettings from "./Components/TextSettings";
import I from "./Components/Icons/";
import TextControl from "./Components/MiniComponents/TextControl";

import { store } from "../index";
const { log } = console;

export default function abc() {}

export let cropFrameCreate = (object) => {
  let info = {
    rect: { strokeWidth: 1.5 },
    lines: { strokeWidth: 0.5 },
  };

  const rect = new fabric.Rect({
    width: 100,
    height: 100,
    fill: "",
    // borderColor:"#e72870",
    // backgroundColor:"rgba(0,0,0,0.1)",
    stroke: "#e72870",
    strokeWidth: info.rect.strokeWidth,
  });

  let _lines = [
    [33, 0, 33, 100],
    [66, 0, 66, 100],
    [0, 33, 100, 33],
    [0, 66, 100, 66],
  ];
  let lines = _lines.map(
    (e) =>
      new fabric.Line(e, {
        stroke: "#e72870",
        strokeWidth: info.lines.strokeWidth,
      })
  );
  let cropFrame = new fabric.Group([rect, ...lines], {
    ...document._.selectionSettings,
    cornerSize: 10,
    hasBorders: false,
    top: object.top,
    left: object.left,
    visible: false,
  });
  cropFrame._type = 0;
  return cropFrame;
};

export let Events = ({ object, id, frame }) => {
  let events = [
    "added",
    "moving",
    "rotating",
    "scaling",
    "mouseup",
    "skewing",
    "editing:exited",
    "selected",
    "deselected",
  ];
  let frameEvents = ["scaling", "selected", "deselected"];
  let _rotate, _move, _scale, _skewed;
  _rotate = _move = _scale = _skewed = false;
  let { canvas } = document._;
  let outerTop =
    canvas.getAbsoluteCoords(object).top - object.getBoundingRect().top;
  const myMoverController = (display) =>
    moverControl({
      display,
      object,
      outerTop,
      id,
    });
  let info = {
    rect: { strokeWidth: 1.5 },
    lines: { strokeWidth: 0.5 },
  };

  events.forEach((e) => {
    switch (e) {
      case "added":
        object.on(e, () => {
          addToArr(object.toJSON(["id"]));
        });
        return;

      case "rotating":
        object.on(e, () => {
          myMoverController();
          _rotate = true;
        });
        return;

      case "moving":
        object.on(e, () => {
          myMoverController();
          _move = true;
        });
        return;

      case "mouseup":
        object.on("mouseup", () => {
          if (_move || _scale || _rotate || _skewed) {
            _move = false;
            _scale = false;
            _rotate = false;
            _skewed = false;
            addToArr(object.toJSON(["id"]));
          }
        });
        return;

      case "skewing":
        object.on(e, () => {
          _skewed = true;
        });
        return;

      case "scaling":
        object.on(e, () => {
          myMoverController();
          _scale = true;
        });
        return;

      case "editing:exited":
        object.on(e, () => {
          addToArr(object.toJSON(["id"]));
        });
        return;

      case "selected":
        object.on(e, () => {
          store.dispatch({
            type: "OBJECT_LIST_CLOSE",
            data: { id, select: false, isOpen: true },
          });
          myMoverController();
        });
        return;

      case "deselected":
        object.on(e, () => {
          myMoverController("none");
          store.dispatch({
            type: "OBJECT_LIST_CLOSE",
            data: { id, select: false, isOpen: false },
          });
          store.dispatch({
            type: "CHOOSE_IMAGE_ACTIVATE",
            data: false,
          });
        });
        return;
    }
  });

  if (frame) {
    let rect = frame._objects.find((k) => k.type === "rect");
    let lines = frame._objects.filter((k) => k.type === "line");
    frameEvents.forEach((e) => {
      switch (e) {
        case "scaling":
          frame.on(e, () => {
            rect.set({
              scaleX: rect.scaleX ? rect.scaleX : 2,
              scaleY: rect.scaleY < 3 ? rect.scaleY : 3,
              strokeWidth: Math.min(
                info.rect.strokeWidth / frame.scaleX,
                info.rect.strokeWidth / frame.scaleY
              ),
            });

            lines.forEach((e) => {
              e.set({
                strokeWidth: Math.min(
                  info.lines.strokeWidth / frame.scaleX,
                  info.lines.strokeWidth / frame.scaleY
                ),
              });
            });
            canvas.renderAll();
          });
          return;
        case "selected":
          frame.on("selected", () => {
            object.clipPath = null;
            canvas.renderAll();
          });
          return;

        case "deselected":
          frame.on("deselected", () => {
            let _y = frame.top - object.top;
            let _x = frame.left - object.left;
            let rx = (frame.width * frame.scaleX) / (object.scaleX * 2);
            let ry = (frame.height * frame.scaleY) / (object.scaleY * 2);
            // log(object)
            let mask = new fabric.Ellipse({
              rx,
              ry,
              angle: frame.angle,
              left: (object.width / 2) * -1 + _x / object.scaleX,
              top: (object.height / 2) * -1 + _y / object.scaleY,

              // top:frame.top,
              // left:frame.left,
              // originX:false,

              // absolutePositioned:true
            });
            object.clipPath = mask;
            // mask.absolutePositioned=false
            frame.set({ visible: false });
            canvas.renderAll();
          });
          return;
      }
    });
  }
};

export const CommanThings = ({ textName, object, id, frame }) => {
  const { canvas } = document._;
  const text = document.createElement("div");
  object.chooseImageTagType = 0;
  text.style.position = "fixed";
  text.style.display = "none";
  text.className = "_ObjectLabel";
  text.innerHTML = textName;
  text.id = `_${id}-text`;
  object._type = textName;
  document.body.appendChild(text);
  object.id = id;

  Events({ object, id });

  // object.type = type;
  if (frame) {
    // frame.type = type;
    frame.id = `${id}-frame`;
  }
};

function addToArr(data) {
  store.dispatch({ type: "ADD_UNDO", data });
}

function moverControl({ display, object, outerTop, id, extraLeft = 30 }) {
  let control = document.querySelector(`#_${id}-control`);
  let text = document.querySelector(`#_${id}-text`);

  const { canvas } = document._;
  let { left, top } = canvas.getAbsoluteCoords(object);
  text.style.display = display || "block";
  text.style.left = left + 5 + "px";
  text.style.top = top - text.getBoundingClientRect().height + "px";

  control.style.display = display || "flex";

  const controlBoundry = control.getBoundingClientRect();
  const objectBoundry = object.getBoundingRect();
  let _left = left >= objectBoundry.left ? objectBoundry.left : left;
  let _top = objectBoundry.top;
  control.style.left = _left + controlBoundry.width - extraLeft + "px";
  control.style.top = outerTop + _top + objectBoundry.height + 10 + "px";
}

export function addImageToCanvas({ id, type }) {
  const { canvas } = document._;

  let _img = new window.Image();
  _img.onload = (e) => {
    canvas.renderAll();
  };
  _img.src = I.imageDefault;
  let object = new fabric.Image(
    _img,

    {
      ...document._.selectionSettings,
      width: 970,
      height: 513,
      scaleX: 0.4,
      scaleY: 0.4,
      id,
    }
  );
  let cropFrame = cropFrameCreate(object);
  CommanThings({ textName: "Image", object, id, frame: cropFrame });
  canvas.add(object, cropFrame);
  canvas.renderAll();

  return { object: object, frame: cropFrame };
}

export function addLogoToCanvas({
  id,
  textName = "Logo",
  imageSrc,
  imageWidth,
  imageHeight,
}) {
  const { canvas } = document._;

  let _img = new window.Image();
  _img.onload = (e) => {
    canvas.renderAll();
  };
  _img.src = imageSrc;
  let object = new fabric.Image(_img, {
    ...document._.selectionSettings,
    width: imageWidth,
    height: imageHeight,
    scaleX: 1,
    scaleY: 1,
    // clipPath
  });

  let cropFrame = cropFrameCreate(object);
  CommanThings({ textName, object, id, frame: cropFrame });
  canvas.add(object, cropFrame);
  canvas.renderAll();

  return { object: object, frame: cropFrame };
}

export function addTextToCanvas({ id, type }) {
  const { canvas } = document._;

  let object = new fabric.IText("Enter Heading\nHere", {
    fontFamily: "Poppins",
    ...document._.selectionSettings,
  });

  CommanThings({ textName: "Text", object, id, type });

  object.setControlsVisibility({
    mt: false,
    ml: false,
    mr: false,
    mb: false,
  });

  // canvas.on("object:removed", (e) => {
  //   if (e.target.id === object.id) {
  //     addToArr(object.toJSON(["id"]));
  //   }
  // });
  canvas.add(object);

  return { object: object };
}
