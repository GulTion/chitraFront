import React from "react";
import DrawingList from "./DrawingList";
import "./core.css";

class DashBoard extends React.Component {
  render() {
    return (
      <div className="DashBoard container-fluid">
        <DrawingList
          onSelectDrawing={(e) => {
            this.selectDrawing(e);
          }}
        />
      </div>
    );
  }
}

export default DashBoard;
