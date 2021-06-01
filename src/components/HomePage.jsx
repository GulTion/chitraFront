import { Link } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className={"HomePage"}>
      {NavBar({
        title: "Chitr",
        btn: [
          <Link to="auth" className="btn">
            Login
          </Link>
        ]
      })}
    </div>
  );
};

export default HomePage;
