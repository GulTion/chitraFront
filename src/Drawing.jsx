import React, {Component,useState} from 'react'
import Canvas from 'simple-react-canvas';
import {publishLine,subscribeForPublishLine,getDrawingById,subscribeForAllPublishLine} from "./api"

const {log, table} = console
export default class Drawing extends Component {
    constructor(props){
        super(props);
        this.state = {
            lines:[],
            info:{name:""},
            brushColor:"black"
        }
    }
    componentDidMount(){
        // log(this.props)
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

        getDrawingById(window.location.pathname.split('/')[1],(info)=>{
            log(info)
            log(window.location.pathname.split('/')[1])
            this.setState({
                info:info
            })
        });



    }
   
    handleDraw = (line) => {
        // log(line)
        publishLine({drawingId: this.props.drawingId, ...line});
    }
    
    render() {

        return (this.props.drawing)
            ? (
              <div className="Drawing">
                    {this.state.info.name}
                    {/* <ColorBox onClick={color=>{this.setState({brushColor:color})}}/> */}
                    <Canvas brushColor={this.state.brushColor} onDraw={this.handleDraw} drawingEnabled={true} lines={this.state.lines}/>
                </div>
                
            )
            : null;
    }
}



function ColorBox({onClick}) {
    const [colorList,setList] = useState(["#ff0000", "#ff00ff", "#f12ff1"])
    return (
        <div className="ColorBox">
            <div className="colorList">
                {colorList.map(e=>{
                    return <div onClick={k=>onClick(e)} className="color" key={e} style={{background:e}}></div>
                })}
            </div>
        </div>
    )
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

