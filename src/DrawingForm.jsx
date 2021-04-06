import React, {Component} from 'react'
import {createDrawing} from "./api"

export default class DrawingForm extends Component {
    state = {
        name: ""
    }
    handleSubmit = (e) => {
        e.preventDefault();
        createDrawing({name: this.state.name});
        this.setState({name: ""})
    }
    render() {
        return (
            <div className="DrawingForm">
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={evt => this.setState({name: evt.target.value})}/>
                    <input type="submit"/></form>
            </div>
        )
    }
}
