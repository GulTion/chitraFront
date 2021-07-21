import React from "react";

import CurrentColor from "./CurrentColor";
import ColorImageTab from "./ColorImageTab";
import { connect } from "react-redux";

function ArtBoardSettings(props) {
  const {isColor, value, name} = props.CurrentColor;
  return (
    <div className="_ArtBoardSettings">
      <div className="_First">Choose Background:</div>
      <div className="_Second">
        <CurrentColor isColor={isColor} value={value} name={name} />
        <ColorImageTab ColorImageTab={props.ColorImageTab} ColorSelected={props.ColorSelected}/>
      </div>
    </div>
  );
}
const mstp =state=>{
  const {type,  value, name, index} = state.canvas.background;
  return {
    CurrentColor:{
      value:type==="color"?value:value.src,
      isColor:type==="color",
      name:name
    },
    ColorImageTab:{
      type, value,name, index
    }
  }
}
const mdtp = dispatch =>{
  return {
    ColorSelected:e=>dispatch({type:"COLOR_CHOOSE_CANVAS", data:e})
  }
}
export default connect(mstp,mdtp)(ArtBoardSettings)