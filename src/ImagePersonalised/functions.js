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

const CommanThings = ({ text, textName, object, id }) => {
  text.style.position = "fixed";
  text.style.display = "none";
  text.className = "_ObjectLabel";
  text.innerHTML = textName;
  document.body.appendChild(text);
  object.id = id;
};

function moverControl({
  display,
  idName,
  canvas,
  object,
  text,
  outerTop,
  id,
  extraLeft = 30,
}) {
  // textControl
  // imageControl
  let control = document.querySelector(`#_${id}-${idName}`);
  // log(control)
  let { left, top } = canvas.getAbsoluteCoords(object);
  let realHeight = object.height * object.scaleY;
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

export function addImageToCanvas(id) {
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

  let text = document.createElement("div");
  // const id = uuid();
  const { canvas } = document._;

  // ReactDOM.render(TextControl, document.getElementById('root'));
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
      // clipPath
    },
    (e) => {
      // log(e)
    }
  );

  let cropFrame = new fabric.Group([rect, ...lines], {
    ...document._.selectionSettings,
    cornerSize: 10,
    hasBorders: false,
    top: object.top,
    left: object.left,
    visible: false,
  });
  // canvas.sendToBack(object);

  object.setControlsVisibility({});

  let newRect = new fabric.Rect({
    width: 100,
    height: 100,
    stroke: "red",
    strokeWidth: 1,
    fill: "",
  });
  // canvas.add(newRect) // for the object outer boundery
  CommanThings({ text, textName: "Image", object, id });
  let outerTop =
    canvas.getAbsoluteCoords(object).top - object.getBoundingRect().top;

  const myMoverController = (display) =>
    moverControl({
      display,
      idName: "imageControl",
      canvas,
      object,
      text,
      outerTop,
      id,
    });

  object.on("selected", () => {
    store.dispatch({
      type: "OBJECT_LIST_CLOSE",
      data: { id, select: false, isOpen: true },
    });
    myMoverController();
  });
  object.on("moving", () => {
    myMoverController();
  });
  object.on("scaling", () => {
    myMoverController();
  });
  object.on("deselected", () => {
    text.style.display = "none";
    store.dispatch({
      type: "CHOOSE_IMAGE_ACTIVATE",
      data: false,
    });
    store.dispatch({
      type: "OBJECT_LIST_CLOSE",
      data: { id, select: false, isOpen: false },
    });
  });
  object.on("rotating", () => {
    myMoverController();
  });

  cropFrame.setControlsVisibility({});
  cropFrame.on("scaling", (e) => {
    rect.set({
      scaleX: rect.scaleX ? rect.scaleX : 2,
      scaleY: rect.scaleY < 3 ? rect.scaleY : 3,
      strokeWidth: Math.min(
        info.rect.strokeWidth / cropFrame.scaleX,
        info.rect.strokeWidth / cropFrame.scaleY
      ),
    });

    lines.forEach((e) => {
      e.set({
        strokeWidth: Math.min(
          info.lines.strokeWidth / cropFrame.scaleX,
          info.lines.strokeWidth / cropFrame.scaleY
        ),
      });
    });
    canvas.renderAll();
  });
  cropFrame.on("selected", () => {
    object.clipPath = null;
    canvas.renderAll();
  });
  cropFrame.on("deselected", () => {
    let _y = cropFrame.top - object.top;
    let _x = cropFrame.left - object.left;
    let rx = (cropFrame.width * cropFrame.scaleX) / (object.scaleX * 2);
    let ry = (cropFrame.height * cropFrame.scaleY) / (object.scaleY * 2);
    // log(object)
    let mask = new fabric.Ellipse({
      rx,
      ry,
      angle: cropFrame.angle,
      left: (object.width / 2) * -1 + _x / object.scaleX,
      top: (object.height / 2) * -1 + _y / object.scaleY,

      // top:cropFrame.top,
      // left:cropFrame.left,
      // originX:false,

      // absolutePositioned:true
    });
    object.clipPath = mask;
    // mask.absolutePositioned=false
    cropFrame.set({ visible: false });
    canvas.renderAll();
  });

  canvas.add(object, cropFrame);
  // cropFrame.set({top:0,left: 0})
  canvas.renderAll();
  // canvas.setActiveObject(cropFrame);
  // canvas.on('object:moving', null);

  return { object: object, frame: cropFrame, text: text };
}

export function addLogoToCanvas(
  id,
  textName = "Logo",
  imageSrc = I.logoImage,
  imageWidth,
  imageHeight
) {
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

  let text = document.createElement("div");
  // const id = uuid();
  const { canvas } = document._;

  // ReactDOM.render(TextControl, document.getElementById('root'));
  let _img = new window.Image();
  _img.onload = (e) => {
    canvas.renderAll();
  };
  _img.src = imageSrc;
  let object = new fabric.Image(
    _img,
    {
      ...document._.selectionSettings,
      width: imageWidth,
      height: imageHeight,
      scaleX: 1,
      scaleY: 1,
      // clipPath
    },
    (e) => {
      // log(e)
    }
  );

  let cropFrame = new fabric.Group([rect, ...lines], {
    ...document._.selectionSettings,
    cornerSize: 10,
    hasBorders: false,
    top: object.top,
    left: object.left,
    visible: false,
  });
  // canvas.sendToBack(object);

  object.setControlsVisibility({});

  let newRect = new fabric.Rect({
    width: 100,
    height: 100,
    stroke: "red",
    strokeWidth: 1,
    fill: "",
  });
  // canvas.add(newRect) // for the object outer boundery
  CommanThings({ text, textName, object, id });
  let outerTop =
    canvas.getAbsoluteCoords(object).top - object.getBoundingRect().top;

  const myMoverController = (display) =>
    moverControl({
      display,
      idName: "imageControl",
      canvas,
      object,
      text,
      outerTop,
      id,
    });

  object.on("selected", () => {
    store.dispatch({
      type: "OBJECT_LIST_CLOSE",
      data: { id, select: false, isOpen: true },
    });
    myMoverController();
  });
  object.on("moving", () => {
    myMoverController();
  });
  object.on("scaling", () => {
    myMoverController();
  });
  object.on("deselected", () => {
    text.style.display = "none";
    store.dispatch({
      type: "CHOOSE_IMAGE_ACTIVATE",
      data: false,
    });
    store.dispatch({
      type: "OBJECT_LIST_CLOSE",
      data: { id, select: false, isOpen: false },
    });
  });
  object.on("rotating", () => {
    myMoverController();
  });
  object.chooseImageTagType = 0;

  cropFrame.setControlsVisibility({});
  cropFrame.on("scaling", (e) => {
    rect.set({
      scaleX: rect.scaleX ? rect.scaleX : 2,
      scaleY: rect.scaleY < 3 ? rect.scaleY : 3,
      strokeWidth: Math.min(
        info.rect.strokeWidth / cropFrame.scaleX,
        info.rect.strokeWidth / cropFrame.scaleY
      ),
    });

    lines.forEach((e) => {
      e.set({
        strokeWidth: Math.min(
          info.lines.strokeWidth / cropFrame.scaleX,
          info.lines.strokeWidth / cropFrame.scaleY
        ),
      });
    });
    canvas.renderAll();
  });
  cropFrame.on("selected", () => {
    object.clipPath = null;
    canvas.renderAll();
  });
  cropFrame.on("deselected", () => {
    let _y = cropFrame.top - object.top;
    let _x = cropFrame.left - object.left;
    let rx = (cropFrame.width * cropFrame.scaleX) / (object.scaleX * 2);
    let ry = (cropFrame.height * cropFrame.scaleY) / (object.scaleY * 2);
    // log(object)
    let mask = new fabric.Ellipse({
      rx,
      ry,
      angle: cropFrame.angle,
      left: (object.width / 2) * -1 + _x / object.scaleX,
      top: (object.height / 2) * -1 + _y / object.scaleY,

      // top:cropFrame.top,
      // left:cropFrame.left,
      // originX:false,

      // absolutePositioned:true
    });
    object.clipPath = mask;
    // mask.absolutePositioned=false
    cropFrame.set({ visible: false });
    canvas.renderAll();
  });

  canvas.add(object, cropFrame);
  // cropFrame.set({top:0,left: 0})
  canvas.renderAll();
  cropFrame._type = 0;
  // canvas.setActiveObject(cropFrame);
  // canvas.on('object:moving', null);

  return { object: object, frame: cropFrame, text: text };
}

export function addTextToCanvas(id) {
  // const [render, setRender] = useState(uuid())

  let text = document.createElement("div");
  // const id = uuid();
  const { canvas } = document._;

  let object = new fabric.IText("Enter Heading\nHere", {
    fontFamily: "Poppins",
    ...document._.selectionSettings,
  });

  CommanThings({ text, textName: "Text", object, id });

  object.setControlsVisibility({
    mt: false,
    ml: false,
    mr: false,
    mb: false,
  });

  object.on("added", () => {
    let { left, top } = canvas.getAbsoluteCoords(object);
    text.style.left = left + 5 + "px";
    text.style.top = top - text.getBoundingClientRect().height + "px";
  });

  let _;
  let outerTop =
    canvas.getAbsoluteCoords(object).top - object.getBoundingRect().top;

  const myMoverController = (display) =>
    moverControl({
      display,
      idName: "textControl",
      canvas,
      object,
      text,
      outerTop,
      id,
    });

  _ = object?.on("rotating", (e) => {
    myMoverController();
  });

  _ = object?.on("moving", () => {
    myMoverController();
  });

  _ = object?.on("scaling", () => {
    myMoverController();
  });

  _ = object?.on("selected", () => {
    store.dispatch({
      type: "OBJECT_LIST_CLOSE",
      data: { id, select: false, isOpen: true },
    });
    myMoverController();
  });

  _ = object?.on("deselected", () => {
    let control = document.querySelector(`#_${id}-textControl`);
    text.style.display = "none";
    control.style.display = "none";
    store.dispatch({
      type: "OBJECT_LIST_CLOSE",
      data: { id, select: false, isOpen: false },
    });
  });

  canvas.add(object);

  return { object: object, text: text };
}
