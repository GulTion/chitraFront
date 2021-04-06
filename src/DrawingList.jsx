import React, {Component} from 'react'
import {Link} from "react-router-dom";

import {subscribeForDrawings} from "./api"

const {log} = console
export default class DrawingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawings: []
        }
        subscribeForDrawings((drawing) => {
    
            this.setState(prev => ({
                drawings: [drawing, ...prev.drawings]
            }))
        });
    }

    render() {
        const drawingList = this
            .state
            .drawings
            .map(drawing => (
                <li className="DrawingList" key={drawing.id} onClick={(evt)=>{this.props.onSelectDrawing(drawing);log(drawing)}}><Link to={`/${drawing.id}`}>{drawing.name}</Link></li>
            ))
        return (
            <div className="DrawingLists">
                <ul>{drawingList}</ul>
            </div>
        )
    }
}
