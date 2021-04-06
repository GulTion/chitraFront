import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';

import DrawingForm from "./DrawingForm"
import DrawingList from "./DrawingList"
import Drawing from "./Drawing"

const {log} = console

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDrawing: {id:"",name:""}
        }

    }
    

    selectDrawing = (drawing) => {

        this.setState({selectedDrawing: drawing})

    }

    render() {

        return <Router>
            <div className="App">
                <h1>{this.state.selectedDrawing.name==""?"चित्र":this.state.selectedDrawing.name}</h1>

                {!this.state.selectDrawing &&< Drawing />}

                <Switch>
                <Route exact path="/" >
                    <DrawingForm/>
                    < DrawingList onSelectDrawing = {e => this.selectDrawing(e)} />
                    </Route>
                <Route path="/:drawingId" render={e=>{
                        return <Drawing drawingId={e.match.params.drawingId} drawing={this.state.selectedDrawing}/>
                    }}>
                
                        
                    </Route>

                    
                </Switch>

            </div>
        </Router>
    }
}

export default App;
