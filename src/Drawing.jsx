import React, {Component} from 'react'
import Canvas from 'simple-react-canvas';
import {publishLine,subscribeForPublishLine} from "./api"

const {log, table} = console
export default class Drawing extends Component {
    constructor(props){
        super(props);
        this.state = {
            lines:[]
        }
    }
    componentDidMount(){
        log(this.props)
        subscribeForPublishLine(this.props.drawingId, (lineEvt)=>{
            this.setState(prev=>{
                return {lines:[...prev.lines, ...lineEvt.lines]}
            })
        })
    }
   
    handleDraw = (line) => {
     
        publishLine({drawingId: this.props.drawingId, ...line});
    }
    render() {

        return (this.props.drawing)
            ? (
              <div className="Drawing">
                    
                    <Canvas onDraw={this.handleDraw} drawingEnabled={true} lines={this.state.lines}/>
                </div>
                
            )
            : null;
    }
}
