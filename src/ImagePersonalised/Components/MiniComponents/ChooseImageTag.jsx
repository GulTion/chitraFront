import React, { useState } from "react";
import I from "../Icons/";
export default function ChooseImageTag({
  object,
  mergeText,
  imageTagText,
  chooseImage,
  imageSrc,
}) {
  const [who, setWho] = useState(object.chooseImageTagType);

  const handleForChooseImage = (i) => {
    object.chooseImageTagType = Math.abs(who - 1);
    setWho(Math.abs(who - 1));

    console.log(object._originalElement.currentSrc);
  };

  return (
    <div className="d-flex flex-row  _ChooseImageTag">
      <div
        className={`_ChooseImageTagType _MergeTag ${
          who === 0 ? "_Selected" : ""
        }`}
        onClick={() => {
          handleForChooseImage(who);
          let img = new Image();
          img.src = imageSrc;
          object.setElement(img);
          document._.canvas.renderAll();
        }}
      >
        {mergeText}
      </div>
      <div className="_OR">
        <div className="_ORInner">OR</div>
      </div>
      <div
        className={`_ChooseImageTagType _ImageTag ${
          who === 1 ? "_Selected" : ""
        }`}
        onClick={() => {
          handleForChooseImage(who);
          chooseImage();
        }}
        style={{
          background:
            who === 1 ? `url(${object._originalElement.currentSrc})` : "",
          backgroundSize: "contain",
        }}
      >
        {who !== 1 ? imageTagText : null}
      </div>
    </div>
  );
}
