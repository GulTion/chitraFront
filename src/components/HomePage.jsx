import { Link } from "react-router-dom";
import React,{useState} from "react";
import NavBar from "./NavBar";
import axios from "axios"
import URL from "../URL"

const HomePage = () => {
  const [l,setL] = useState(false)
  axios
  .post(`${URL}/auth/check`, { key: atob(localStorage.getItem("id")) })
  .then((e) => {
    const { data } = e;
    if (data.success) {
      setL(true)
      
    } else {
      setL(false)
    }
  });

  return (
    <div className={"HomePage"}>
      {NavBar({
        title: "Chitr",
        btn: [
          !l?<Link to="auth" className="btn">
            Log In
          </Link>:<button className="btn" onClick={()=>{localStorage.setItem("id","");setL(false)}}>Log Out</button>,
          l&&<Link to="dashboard" className="btn">
          dashBoard
        </Link>
        ]
      })}
    </div>
  );
};

export default HomePage;
