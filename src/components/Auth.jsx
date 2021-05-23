import React, { Component } from 'react'
import pen from "../pen.svg"
import axios from "axios"
import {Redirect} from 'react-router-dom'
import URL from "../URL"

import store from "./store"

export default class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password:"",
            success:false
        }

    }
    auth(type){
        // type : ['signin', 'signup']
        const {email, password} = this.state
        axios.post(`${URL}/auth/${type}`, {email, password}).then(e=>{
            const {data} = e
            if(data.success){
                localStorage.setItem("id",btoa(data.id));
                this.setState({success:true})
                window.location.pathname = '/dashboard'
                // console.log(data)
            }else{
                alert(data.message)
            }
        });
        
        
    }

    render() {
        return (
            <div className="container h-100 d-flex align-items-center">
            {/* {this.state.success&&<Redirect to="/dashboard" />} */}
        <form className="from" style={{width: "100%", maxWidth: "330px", padding: "15px",margin: "auto" }}
            onSubmit={e=>e.preventDefault()}
        >
      <img className="mb-4" src={pen} alt="" width="72" height="72" />
      <h1 className="h3 mb-3 font-weight-normal">Please sign in/up</h1>
  
      <input onChange={e=>this.setState({email:e.target.value})} value={this.state.email} name="email" type="email" id="inputEmail" className="form-control mb-2" placeholder="Email address" required autoFocus/>
    
      <input onChange={e=>this.setState({password:e.target.value})} value={this.state.password} name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required />
     
      <button onClick={e=>this.auth("signin")} className="btn btn-lg btn-primary btn-block mt-2" type="submit">Sign in</button>

      <button onClick={e=>this.auth("signup")} className="btn btn-lg btn-info btn-block mt-2 ms-2 text-light" type="submit">Sign up</button>
      {/* <p classNameName="mt-5 mb-3 text-muted">© 2017-2018</p> */}
    </form>
            </div>
        )
    }
}
