import { fabric } from "fabric";
const {log} = console;
export default function abc(){}

export function addTextToCanvas(){
    const {canvas} = document._
    let Text = document.createElement("div");
    Text.style.position="fixed"
    Text.style.display ="none"
    
    Text.className="_ObjectLabel"
    Text.innerHTML = "Text"
    document.body.appendChild(Text)
    let IText = new fabric.IText("Enter Heading\nHere", {
        fontFamily:"Poppins",
        ...document._.selectionSettings
    })

 
    IText.on("selected", ()=>{
        Text.style.display = "block"
    })
    IText.on("deselected", ()=>{
        Text.style.display = "none"
    })
    IText.on("selection:cleared", ()=>{
        Text.style.display = "none"
    })

    IText.on("added", ()=>{
        let {left, top} = canvas.getAbsoluteCoords(IText);
        Text.style.left =left+5+"px";
        Text.style.top = top-Text.getBoundingClientRect().height   +"px";
    })

    // IText.on("rotating", (e)=>{
    //         const {angle, aCoords:{tl:{x,y}}} = e.transform.target;
    //         Text.style.transform = `rotateZ(${angle}deg)`;
    //         Text.style.left = x- canvas._offset.left+5+"px";
    //         Text.style.top =   y- canvas._offset.top  +"px";
    //         console.log(e);
    // })

    IText.on("moving", ()=>{
        let {left, top} = canvas.getAbsoluteCoords(IText);
        Text.style.left =left+5+"px";
        Text.style.top = top-Text.getBoundingClientRect().height   +"px";
    })
    IText.on("")
    canvas.add(IText);
}

