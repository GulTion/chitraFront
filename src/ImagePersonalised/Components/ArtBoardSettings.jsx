import React from "react";

import CurrentColor from "./CurrentColor";
import ColorImageTab from "./ColorImageTab";

export default function ArtBoardSettings() {
  return (
    <div className="_ArtBoardSettings">
      <div className="_First">Choose Background:</div>
      <div className="_Second">
        <CurrentColor isColor={true} value={"#fef0fe"} name={"#fefefe"} />
        <ColorImageTab />
      </div>
    </div>
  );
}
