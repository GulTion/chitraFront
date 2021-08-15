import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";


import NewCanvas from "./components/newCanvas/";

import Drawing from "./components/Drawing";
import Auth from "./components/Auth";

import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";

import store from "./Reducer/store";

import db from "./db";

const { log } = console;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDrawing: { id: "", name: "" },
      title: db.TITLE,
    };
  }
  componentWillMount() {
    this.setState({ title: db.TITLE });
    log(store.getState());
  }

  selectDrawing = (drawing) => {
    this.setState({ selectedDrawing: drawing });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/dashboard">
              <DashBoard />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>

            <Route
              path="/drawings/:drawingId"
              render={(e) => {
                return (
                  <>
                    {/* <h1>{this.state.selectedDrawing.name}</h1> */}
                    <Drawing
                      drawingId={e.match.params.drawingId}
                      drawing={this.state.selectedDrawing}
                    />
                  </>
                );
              }}
            ></Route>

            {/* <Route
              path="/new/drawings/:drawingId"
              render={(e) => (
                <ExcaliDraw drawingId={e.match.params.drawingId} />
              )}
            ></Route> */}

            <Route  path="/new/drawings/:drawingId" render={(e) => (
                <NewCanvas drawingId={e.match.params.drawingId} />
              )}>
            
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
