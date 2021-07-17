import { Link } from "react-router-dom";
import React from "react";
const NavBar = ({ title, btn, color }) => {
  return (
    <div
      style={{ background: color && "none" }}
      className="NavBar d-flex align-items-center justify-content-around p-1"
    >
      <h1 className="text-light display-3 float-left">{title}</h1>
      <div className="d-flex align-items-center justify-content-around p-1">
      {btn?.map((e) => {
        return e;
      })}</div>
    </div>
  );
};

export default NavBar;
