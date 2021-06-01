import React from "react";
import DrawingList from "./DrawingList";
import "./core.css";
import NavBar from "./NavBar"

import {Link} from "react-router-dom"

class DashBoard extends React.Component {
  render() {
    return (
      <div className="DashBoard container-fluid">
        {NavBar({title:"DashBoard", btn:[
          <Link to="/" className="btn">{"< Back"}</Link>
        ], color:true})}
        <DrawingList
        />
      </div>
    );
  }
}

export default DashBoard;
