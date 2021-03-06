import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import {
  subscribeForDrawingsList,
  createDrawing,
  deleteDrawing,
} from "../api";
import axios from "axios";
import URL from "../URL";
import "./core.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import NewAdder from "./NewAdder";

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
      status: "Loading ...",
    };
  }

  getDrawing() {
    subscribeForDrawingsList((drawing) => {
      log("getDrawing is running");
      this.setState((prev) => ({
        drawings: drawing,
        temp: drawing,
        status: "No Drawing Found !",
      }));
    });
  }
  getAllList() {
    axios
      .post(`${URL}/drawing/all`, { id: atob(localStorage.getItem("id")) })
      .then((e) => {
        log(e);
        const {
          data: { list },
        } = e;
        document.title = `${list.length} Drawings`;
        this.setState((prev) => ({
          drawings: list,
          temp: list,
          status: "No Drawing Found !",
        }));
      });
  }

  componentWillMount() {
    axios
      .post(`${URL}/auth/check`, { key: atob(localStorage.getItem("id")) })
      .then((e) => {
        const { data } = e;
        if (data.success) {

          this.getAllList();
        } else {
          this.setState({ isAuth: false });
        }
      });
  }

  deleteDrawing({ id }) {
    deleteDrawing(id, (k) => {
      log(k);
      this.getAllList();
    });
  }
  DrawingElement({ drawing }) {
    return (
      <div className="drawingCard card m-1 w-auto shadow-sm " key={drawing._id}>
        {this.state.redirect && <Redirect to="/auth" />}
        <div className="card-body ">
          <h5 className="card-title">{drawing.name}</h5>
          <div className="d-flex flex-row justify-content-center">

        
          <Link
            className="card-text btn btn-info text-light"
            to={`/new/drawings/${drawing._id}`}
            target={"_blank"}
          >
            {"Draw"}
          </Link>
          <button
            onClick={(e) => this.deleteDrawing({ id: drawing._id })}
            className="btn btn-danger mx-1"
          >
            DELETE
          </button>
          </div>
        </div>
        <h6 className="card-footer text-dimmed">
          {new Date(drawing.timestamp).toLocaleString()}
        </h6>
      </div>
    );
  }

  render() {
    const drawingList = this.state.temp.map((drawing) =>
      this.DrawingElement({ drawing, getAllList: this.getAllList })
    );

    return (
      <>
        {NavBar({
          title: "DashBoard",
          btn: [
            <Link to="/" className="btn">
              {"< Back"}
            </Link>,
            <div
              className={"btn"}
              onClick={async () => {
                this.setState({ isNew: true });
              }}
            >
              + NEW
            </div>,
          ],
          color: true,
        })}
        <Popup
          onClose={() => this.setState({ isNew: false })}
          open={this.state.isNew}
        >
          <NewAdder
            onClose={() => this.setState({ isNew: false })}
            onSave={async (name) => {
              await new Promise((res, rej) => {
                createDrawing({ name, key: "" });
                res();
              });
              await this.getAllList();
            }}
          />
        </Popup>
        <div>
          {this.state.isAuth ? null : <Redirect to="/auth" />}

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
                    (d) => d.name.toLowerCase().indexOf(value) !== -1
                  ),
                });
              }}
            />
          </div>

          <div className="d-flex flex-wrap container justify-content-center DrawingList">
            {drawingList.length ? (
              drawingList
            ) : (
              <h1 className="text-white">{this.state.status}</h1>
            )}
          </div>
        </div>
      </>
    );
  }
}
