import React, { Component } from "react";

export default class NewAdder extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <div className="d-flex flex-column justify-content-center NewAdder">
        <input
          onBlur={(e) => this.setState({ value: e.target.value })}
          type="text"
          placeholder="Enter Drawing Name"
        />
        <div
          className="btn btn-primary"
          onClick={(e) => {
            this.props.onSave(this.state.value);
            this.props.onClose();
            this.setState({ value: "" });
          }}
        >
          SAVE
        </div>
      </div>
    );
  }
}
