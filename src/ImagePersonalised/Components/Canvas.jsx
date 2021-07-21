
import React,{useEffect,  useRef} from "react"
import { fabric } from "fabric";
import { connect } from "react-redux";
const {log} = console;


function position({canvas, obj ,element, offset}){
    let coord =  canvas.get;
    log(coord) 


}
fabric.Canvas.prototype.getAbsoluteCoords = function(object) {
    return {
      left: object.left + this._offset.left,
      top: object.top + this._offset.top
    };
  }

function Canvas(props){
    const ref = useRef();
    const ref1 = useRef();
    const ref3 = useRef();
    
  

    const backgroundHandler = (obj)=>{
        function clearCanvasBackground() {
            if (obj.canvas) {
              obj.canvas.setBackgroundImage(null);
              obj.canvas.setBackgroundColor('');
              obj.canvas.renderAll();
            }
          }
          

  
        if(obj.type==="image"){
            let img = new fabric.Image(obj.value);
            clearCanvasBackground()
            obj.canvas.setBackgroundImage(img, obj.canvas.renderAll.bind(obj.canvas), {
                scaleX: obj.canvas.width / img.width,
                scaleY: obj.canvas.height / img.height
             });
            // img.src = obj.value.src;
            // obj.canvas.setBackgroundImage(img.src,obj.canvas.renderAll.bind(obj.canvas))
         log(obj)
        }else{
            clearCanvasBackground();
            // obj.canvas.clear()
            obj.canvas.setBackgroundColor(obj.value,(e)=>{
            
                obj.canvas.renderAll.bind(obj.canvas)(e)});
            
        }
    }
   
    
    useEffect(()=>{
        let realCanvas = ref1.current;
        const canvas = new fabric.Canvas(realCanvas);
        
        document._ = {}
        document._.selectionSettings = {
            cornerColor:"#ffffff",
            borderColor:"#e7416a",
            cornerStrokeColor:"#e7416a",
            cornerStyle:"circle",
          transparentCorners:false,
          cornerSize:12
        }
        document._.canvas = canvas;
        let parent = ref.current;

        let {width, height} = parent.getBoundingClientRect()
  
       

        canvas.setDimensions({
            width,height
        })

        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20
          });

          let itext = new fabric.IText("HELLO WORLD", );
          itext.on("moving",(e)=>{
              let {left, top} = canvas.getAbsoluteCoords(itext);
              ref3.current.style.left =left+"px";
              ref3.current.style.top = top-ref3.current.getBoundingClientRect().height   +"px";
              
          
         
              
          })
          canvas.add(itext)

        //   position({canvas, obj:rect})
        

          
          // "add" rectangle onto canvas
          canvas.add(rect);
      


    },[])

    useEffect(()=>{
        backgroundHandler({canvas:document._.canvas, type:props.canvas.background.type, value:props.canvas.background.value});
    }, [props.canvas?.background])

    return(
        <div className="_Canvas" ref={ref}>
        <canvas ref={ref1} ></canvas>
        <div className="text" ref={ref3} style={{position:"fixed"}}>TEXT</div>
        </div>
    )
}

const mstp=state=>{
    return {
        canvas:state.canvas
    }
}

export default connect(mstp,)(Canvas)