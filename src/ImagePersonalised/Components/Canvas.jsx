
import React,{useEffect,  useRef} from "react"
import { fabric } from "fabric";
const {log} = console;


function position({canvas, obj ,element, offset}){
    let coord =  canvas.get;
    log(coord) 


}


export default function Canvas(){
    const ref = useRef();
    const ref1 = useRef();
    
    useEffect(()=>{
        let parent = ref.current;
        let realCanvas = ref1.current;
        
        let {width, height} = parent.getBoundingClientRect()
        const canvas = new fabric.Canvas(realCanvas);
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

        //   position({canvas, obj:rect})
        

          
          // "add" rectangle onto canvas
          canvas.add(rect);
          rect.on("moving", (e)=>{
            log(e)
        })
        


    },[])
    return(
        <div className="_Canvas" ref={ref}>
        <canvas ref={ref1} ></canvas>
        <div className="text">TEXT</div>
        </div>
    )
}