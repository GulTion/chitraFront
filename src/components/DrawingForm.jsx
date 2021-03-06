import React, { Component } from "react";
import { createDrawing } from "../api";


export default class DrawingForm extends Component {
  state = {
    name: "",
    isNew: false,
    submitButtonTitle: "NEW",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let id = localStorage.getItem("id");
    createDrawing({ name: this.state.name, key: atob(id) });
    this.setState({ name: "" });
  };
  render() {
    return (
      <div className="DrawingForm">
        <div className="form">
          <input
            value={this.state.name}
            type="text"
            placeholder="Search Drawing"
            onChange={(evt) => this.setState({ name: evt.target.value })}
          />
        
        </div>
      </div>
    );
  }
}
