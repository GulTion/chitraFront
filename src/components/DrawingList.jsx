import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import {
  subscribeForDrawings,
  subscribeForDrawingsList,
  createDrawing,
  deleteDrawing
} from "../api";
import axios from "axios";
import URL from "../URL";
import "./core.css";

const { log } = console;
export default class DrawingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawings: [],
      temp: [],
      key: "",
      redirect: false,
      query: "",
      name: "",
      isNew: false,
      isAuth: true,
      status:"Loading ..."
    };
  }

  getDrawing() {
    subscribeForDrawingsList((drawing) => {
      log(drawing);
      this.setState((prev) => ({ drawings: drawing, temp: drawing ,status:"No Drawing Found !"}));
    });

  }

  

  componentDidMount() {
    
   

    // subscribeForDrawings((drawing) => {     log('drawing is added') log(drawing)
    //    if(drawing.operationType=="insert"){ this.setState(prev => ({
    // drawings: [drawing.fullDocument, ...prev.drawings]     }))     }
    // if(drawing.operationType=="delete"){    this.setState(prev => ({
    // drawings: prev.drawings.filter(e=>e._id!==drawing.documentKey._id)
    // }))     } });
  }
  componentWillMount(){
    axios
    .post(`${URL}/auth/check`, { key: atob(localStorage.getItem("id")) })
    .then((e) => {
      const { data } = e;
      if (data.success) {
        this.getDrawing();
        
      } else {
        this.setState({ isAuth: false });
      }
    });
  }

  render() {
    const drawingList = this.state.temp.map((drawing) => (
      <div
        className="drawingCard card m-1 w-auto shadow-sm "
        key={drawing._id}
        
      >
        {this.state.redirect && <Redirect to="/auth" />}
        <div className="card-body ">
          <h5 className="card-title">{drawing.name}</h5>
          <Link
            className="card-text btn btn-info text-light"
            to={`/drawings/${drawing._id}`}
          >
            {"Draw"}
          </Link>
          <button
            onClick={(e) =>
              deleteDrawing(drawing._id, (k) => {
                log(k);
              })
            }
            className="btn btn-danger mx-1"
          >
            DELETE
          </button>
        </div>
        <h6 className="card-footer text-dimmed">
          {new Date(drawing.timestamp).toLocaleString()}
        </h6>
      </div>
    ));
    
    return (
      <div>
        {this.state.isAuth ? null : <Redirect to="/auth" />}
        

        {/* {this.state.isNew && (
          <div className="row m-1">
            <div className="col">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  placeholder="NAME"
                  value={this.state.name}
                  onChange={(e) => {
                    const { value } = e.target;
                    this.setState({ name: value });
                  }}
                />
                <label for="floatingInputGrid">New Drawing Name</label>
              </div>
            </div>
          </div>
        )} */}

          <div className="container mb-2 form">
              <input
                type="text"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Search"
                value={this.state.query}
                onChange={(e) => {
                  const { value } = e.target;
                  this.setState({
                    query: value,
                    temp: this.state.drawings.filter(
                      (d) => d.name.toLowerCase().indexOf(value) != -1
                    )
                  });
                }}
              />
   
            </div>

        <div className="d-flex flex-wrap container justify-content-center">

          {drawingList.length ? drawingList : <h1>{this.state.status}</h1>}
        </div>
      </div>
    );
  }
}
