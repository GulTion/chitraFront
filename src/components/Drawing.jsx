import React, {Component,useState} from 'react'
import Canvas from 'simple-react-canvas';
import {publishLine,subscribeForPublishLine,getDrawingById,subscribeForAllPublishLine} from "../api"

import axios from "axios"
import URL from "../URL"

const {log, table} = console
export default class Drawing extends Component {
    constructor(props){
        super(props);
        this.state = {
            lines:[],
            info:{name:""},
            brushColor:"black",
            name:"Loading....",
            isFound:false
        }
    }
    componentDidMount(){
        
        // log(this.props)
        const id = window.location.href.split("/").pop()
        log(id)
        axios.post(`${URL}/drawing/get`, {id}).then(e=>{
            const {data} = e;
            log(data)
            if(data.success){
                this.setState({isFound:true,name:data.name});
                log(data)
            }else{
                this.setState({name:"NOT FOUND"})
            }
        })

        subscribeForAllPublishLine(this.props.drawingId, (lineEvt)=>{
            // log(lineEvt)
            this.setState(prev=>{
                return {lines:[...prev.lines, ...lineEvt.lines]}
            })
        })

        subscribeForPublishLine(this.props.drawingId, (lineEvt)=>{
            
            this.setState(prev=>{
                return {lines:[...prev.lines, ...lineEvt.lines]}
            })
        })

        



    }
   
    handleDraw = (line) => {
        // log(line)
        publishLine({drawingId: this.props.drawingId, ...line});
    }
    
    render() {

        return (<>
                <h1>{this.state.name}</h1>
             {this.state.isFound?<div className="Drawing">
                
                    {/* <ColorBox onClick={color=>{this.setState({brushColor:color})}}/> */}
                    <Canvas brushColor={this.state.brushColor} onDraw={this.handleDraw} drawingEnabled={true} lines={this.state.lines}/>
                </div>:null}
                </>
                
            )
         
    }
}




// Canvas.defaultProps = {
//     brushColor: '#000000',
//     lineWidth: 2,
//     canvasStyle: {
//       backgroundColor: '#FFFFFF',
//       cursor: 'pointer'
//     },
//     drawingEnabled: false,
//     lines: []
//   };

