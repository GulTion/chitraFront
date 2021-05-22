import React, {Component} from 'react'
import {Link} from "react-router-dom";

import {subscribeForDrawings,subscribeForDrawingsList} from "./api"
import TimeAgo from "javascript-time-ago"

import en from "javascript-time-ago/locale/en"

TimeAgo.addDefaultLocale(en)
const timeago = new TimeAgo('en-US')

const {log} = console
export default class DrawingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawings: []
        }
        
    }

    componentDidMount(){
        subscribeForDrawingsList((drawing) => {
            log('Getting List')
            this.setState(prev => ({
                drawings: drawing
            }))
        })

        subscribeForDrawings((drawing) => {
            log('drawing is added')
            log(drawing)
            if(drawing.operationType=="insert"){
                 this.setState(prev => ({
                drawings: [drawing.fullDocument, ...prev.drawings]
            }))
            }
            if(drawing.operationType=="delete"){
                this.setState(prev => ({
                    drawings: prev.drawings.filter(e=>e._id!==drawing.documentKey._id)
                }))
            }
           
        });
       
    }

    
    render() {
        const drawingList = this
            .state
            .drawings
            .map(drawing => (
                <div className="card m-1 w-auto shadow-sm" key={drawing._id} onClick={(evt)=>{this.props.onSelectDrawing(drawing);log(drawing)}}>

                    <div className="card-body">
                    <h5 className="card-title">{drawing.name}</h5>
                    <Link className="card-text btn btn-info text-light" to={`/${drawing._id}`}>{"Draw"}</Link>
                    </div>
                    <h6 className="card-footer text-dimmed">{new Date(drawing.timestamp).toLocaleString()}</h6>
                    </div>
            ))
        return (
            <div className="d-flex flex-wrap justify-content-center">
              { drawingList.length?drawingList:<h1>LOADING ...</h1>}
            </div>
        )
    }
}
