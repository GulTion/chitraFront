import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';

import DrawingForm from "./components/DrawingForm"
import DrawingList from "./components/DrawingList"
import Drawing from "./components/Drawing"
import Auth from "./components/Auth"

import store from "./Reducer/store"

import db from "./db"

const {log} = console

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDrawing: {id:"",name:""},
            title:db.TITLE
        }

    }
    componentWillMount(){
        this.setState({title:db.TITLE});
        log(store.getState())
    }
    

    selectDrawing = (drawing) => {

        this.setState({selectedDrawing: drawing})

    }

    render() {

        return <Router>
            <div className="App">


                <Switch>
                <Route exact path="/">
                    <h1>homePage</h1>
                    <Link to="/auth">Auth</Link>
                    <Link to="dashboard">DashBoard</Link>
                </Route>
                <Route path="/dashboard" >
                    <h1>{this.state.title}</h1>
                    {/* <DrawingForm/> */}
                    < DrawingList onSelectDrawing = {e => {this.selectDrawing(e)}} />
                </Route>
                <Route path="/auth">
                    <Auth />
                </Route>
                
                <Route path="/drawings/:drawingId" render={e=>{
                        return <>
                        <h1>{this.state.selectedDrawing.name}</h1>
                        <Drawing drawingId={e.match.params.drawingId} drawing={this.state.selectedDrawing}/>
                        </>
                    }}>
                
                        
                </Route>

                    
                </Switch>

            </div>
        </Router>
    }
}

export default App;
