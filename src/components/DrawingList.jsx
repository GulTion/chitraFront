import React, {Component} from 'react'
import {Link, Redirect} from "react-router-dom";

import {subscribeForDrawings, subscribeForDrawingsList,createDrawing} from "../api"
import axios from "axios"
import URL from "../URL"

const {log} = console
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
            isAuth:true
        }

    }

    getDrawing() {
        subscribeForDrawingsList((drawing) => {
            log('Getting List')
            this.setState(prev => ({drawings: drawing, temp: drawing}))
        })
    }

    componentDidMount() {
        
        this.getDrawing()
        axios.post(`${URL}/auth/check`, {key:atob(localStorage.getItem("id"))}).then(e=>{
            const {data} = e
            if(data.success){

            }else{
                this.setState({isAuth:false})
            }
        })  

        // subscribeForDrawings((drawing) => {     log('drawing is added') log(drawing)
        //    if(drawing.operationType=="insert"){ this.setState(prev => ({
        // drawings: [drawing.fullDocument, ...prev.drawings]     }))     }
        // if(drawing.operationType=="delete"){    this.setState(prev => ({
        // drawings: prev.drawings.filter(e=>e._id!==drawing.documentKey._id)
        // }))     } });

    }

    render() {
        
        const drawingList = this
            .state
            .temp
            .map(drawing => (
                <div
                    className="card m-1 w-auto shadow-sm"
                    key={drawing._id}
                    onClick={(evt) => {
                    this
                        .props
                        .onSelectDrawing(drawing);
                    log(drawing)
                }}>
                    {this.state.redirect &&< Redirect to = "/auth" />}
                    <div className="card-body">
                        <h5 className="card-title">{drawing.name}</h5>
                        <Link
                            className="card-text btn btn-info text-light"
                            to={`/drawings/${drawing._id}`}>{"Draw"}</Link>
                    </div>
                    <h6 className="card-footer text-dimmed">{new Date(drawing.timestamp).toLocaleString()}</h6>
                </div>
            ))
        return (
            <div>
                {this.state.isAuth?null:<Redirect to="/auth" />}
                <div className="row g-2 m-2">
                    <div className="col">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInputGrid"
                                placeholder="Search"
                                value={this.state.query}
                                onChange={e => {
                                const {value} = e.target;
                                this.setState({
                                    query: value,
                                    temp: this
                                        .state
                                        .drawings
                                        .filter(d => d.name.toLowerCase().indexOf(value) != -1)
                                })
                            }}/>
                            <label for="floatingInputGrid">Search</label>
                        </div>
                    </div>
                    <div className="col-3 display-6 rounded">
                        <div className=" bg-dark text-light rounded" onClick={
                            e=>{
                                if(this.state.isNew){
                                    createDrawing({name: this.state.name});
                                    this.getDrawing();
                                }
                                this.setState({isNew:!this.state.isNew,name:""})
                            }
                        }>{!this.state.isNew
                                ? "NEW"
                                : "SAVE"}</div>
                    </div>

                </div>

                {this.state.isNew&&<div className="row m-1">
                    <div className="col">

                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInputGrid"
                                placeholder="NAME"
                                value={this.state.name}
                                onChange={e => {
                                const {value} = e.target;
                                this.setState({name: value})
                            }}/>
                            <label for="floatingInputGrid">New Drawing Name</label>
                        </div>
                    </div>
                </div>}

                <div className="d-flex flex-wrap justify-content-center">
                    {drawingList.length
                        ? drawingList
                        : <h1>LOADING ...</h1>}
                </div>
            </div>
        )
    }
}
